import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import service from './services/persons';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [notification, setNotification] = useState({
    message: null,
    type: null
  });


  useEffect(() => {
    service.getAll()
      .then((response) => {
        setPersons(Array.isArray(response) ? response : []);
      })
      .catch((error) => {
        console.error('Error fetching persons:', error);
      });
  }, []);



  const [filter, setFilter] = useState("");
  const filterChangeHandler = (event) => {
    setFilter(event.target.value);
  }

  const shownPerson = persons?.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addPersonHandler = (name, number) => {

    return new Promise((eccept, reject) => {
      service.create({ name, number })
        .then((person) => {
          eccept(person);
          setPersons(persons.concat(person));
          setNotification({
            message: `Added ${name} number ${number} to phonebook`,
            type: "success"
          })
        })
        .catch(error => {
          setNotification({
            message: error.message,
            type: "danger"
          })
          reject(error);
        })
    })
  };


  const deleteHandler = (id) => {

    if (window.confirm(`Are you sure to delete person with id ${id}?, this action canot undone!`)) {
      service.remove(id).then(() => {
        setPersons(persons => persons.filter(p => p.id != id));
        setNotification({
          message: `Removed ${id} from phonebook`,
          type: "success"
        })
      }).catch(err => {
        setNotification({
          message: err.message,
          type: "danger"
        })
      })
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