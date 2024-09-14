import Person from "./Person";

const Persons = ({ persons = [] }) => {

    return (
        <>
            {persons.map((person) => <Person name={person.name} number={person.number} key={person.id} />)}
        </>
    )
}
export default Persons;