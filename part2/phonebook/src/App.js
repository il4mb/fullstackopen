import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from "axios";
import Notification from './components/Notification';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState({
    message: null,
    type: null
  });


  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    });
  }, []);


  const [filter, setFilter] = useState("");
  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  }

  const shownPerson = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addPersonHandler = (name, number) => {
    return new Promise((resolve, reject) => {
      if (!/^[0-9-]+$/.test(number)) {
        reject("Please enter number only [0-9] or separate with a dash (-)");
      } else {
        try {
          const personObject = {
            name, number, id: String(Math.max(...persons.map(person => Number(person.id))) + 1),
          }

          axios.post('http://localhost:3001/persons', personObject).then(response => {
            setPersons(persons.concat(personObject));
            resolve();

            setNotification({
              message: "Added " + personObject.name,
              type: "success"
            });
          });

        } catch (err) {
          reject(err.message);
        }
      }
    });
  };


  const deleteHandler = (id) => {

    if (window.confirm(`Are you sure to delete person with id ${id}?, this action canot undone!`)) {
      try {

        const person = persons.find(p => p.id == id);
        if (!person) {
          setNotification({
            message: `Cauld't remove ${id}, person not found!`,
            type: "danger"
          });
          return;
        }

        axios.delete(`http://localhost:3001/persons/${id}`).then(response => {
          setPersons(persons => persons.filter(p => p.id != person.id));
          setNotification({
            message: `Information ${person.name} has ben removed from the server!`,
            type: "danger"
          });
        });

      } catch (err) {
        console.error(err.message);
      }
    }

  }



  return (
    <div>

      <h1>Phonebook</h1>
      <Notification message={notification.message} type={notification.type} />

      <Filter handler={filterChangeHandler} value={filter} />

      <h3>Add a new</h3>

      <PersonForm callback={addPersonHandler} />

      <h3>Numbers</h3>

      <Persons persons={shownPerson} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App