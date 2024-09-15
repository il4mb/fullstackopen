import { useState } from "react";

const PersonForm = ({ callback }) => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [feedback, setFeedback] = useState(null);

    const nameChnageHandler = (event) => {
        setName(event.target.value)
    }

    const numberChnageHandler = (event) => {
        setNumber(event.target.value)
    }

    const submitHandler = (event) => {

        event.preventDefault();
        setFeedback(null);

        callback(name, number).then(e => {
            setName("");
            setNumber("");
        }).catch(err => {

        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div>name: <input value={name} onChange={nameChnageHandler} /></div>
            <div>number: <input value={number} onChange={numberChnageHandler} /></div>
            {feedback && <small style={{ color: "red" }}>{feedback}</small>}
            <div><button type="submit">add</button></div>
        </form>
    )
}
export default PersonForm;