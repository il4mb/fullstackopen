import Person from './Person';
import './App.css';


const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const agus = new Person('Ilham B', 25)

function App(props) {
  const [name, age] = [agus.name, agus.age]
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
}

export default App;
