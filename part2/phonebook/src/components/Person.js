const Person = ({ name, number, id, deleteCallback }) => {

    return (
        <>
            <p>{name} {number} <button onClick={() => { deleteCallback(id) }}>delete</button></p>
        </>
    )
}
export default Person;