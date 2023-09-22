const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ name, exercises }) => {
  return (<p>{name} {exercises}</p>)
}

const Content = ({ parts }) => {

  return (
    <div>
      {parts.map((part, idx) => (
        <Part key={idx} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}


const Total = ({ parts }) => {

  const sum = parts.map((part) => part.exercises).reduce((a, b) => a + b);
  return (
    <div><b>Total of {sum} exercises</b></div>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {
        courses.map((course, idx) => (
          <Course key={idx} course={course} />
        ))
      }
    </div>
  )
}

export default App;
