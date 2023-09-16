import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



const Header = (params = { title: "" }) => {
  return (
    <h1>{params.title}</h1>
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

  const course = {
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
      <Header title={course.title} />
      <Content parts={course.parts} />
      <Total title={course.title} parts={course.parts} />
    </div>
  )
}

export default App
