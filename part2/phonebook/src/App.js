import { useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

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
        const personObject = {
          name, number, id: String(persons.length + 1),
        }

        setPersons(persons.concat(personObject))
        resolve();
      }
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handler={filterChangeHandler} value={filter} />

      <h3>Add a new</h3>

      <PersonForm callback={addPersonHandler} />

      <h3>Numbers</h3>

      <Persons persons={shownPerson} />
    </div>
  )
}

export default App