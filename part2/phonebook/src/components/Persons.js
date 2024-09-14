import Person from "./Person";

const Persons = ({ persons = [], deleteHandler }) => {

    return (
        <>
            {persons.map((person) =>
                <Person
                    name={person.name}
                    number={person.number}
                    id={person.id}
                    deleteCallback={deleteHandler}
                    key={person.id}/>
            )}
        </>
    )
}
export default Persons;