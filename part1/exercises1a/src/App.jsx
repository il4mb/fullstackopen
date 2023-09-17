import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}


const Content = (params = { parts: [] }) => {
  return (
    <div>
      {params.parts.map((part) => {
        return (
          <p>{part.name} {part.exercises}</p>
        )
      })}
    </div>
  )
}


const Total = (params = { title: "", parts: [] }) => {

  const exercises = params.parts.map((part) => part.exercises).reduce((a, b) => a + b)
  return (
    <div><b>Total exercises {exercises}</b></div>
  )
}


const App = () => {

  const course = "Half Stack application development";

  const courses = {
    "title": 'Half Stack application development',
    "parts": [
      {
        "name": "Fundamentals of React",
        "exercises": 10
      },
      {
        "name": "Using props to pass data",
        "exercises": 7
      },
      {
        "name": "State of a component",
        "exercises": 14
      }
    ]
  }


  return (
    <div>
      <Header course={course}/>
      <Content part={courses.parts} />
      <Total title={courses.title} parts={courses.parts} />
    </div>
  )
}

export default App
