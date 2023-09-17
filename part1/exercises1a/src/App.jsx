import './App.css'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (<p>{name} {exercises}</p>)
}

const Content = ({parts}) => {

  return (
    <div>
      {parts.map((part, idx) => (
        <Part key={idx} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}


const Total = ({parts}) => {

  const sum = parts.map((part) => part.exercises).reduce((a, b) => a + b);
  return (
    <div><b>Total exercises {sum}</b></div>
  )
}


const App = () => {

  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
