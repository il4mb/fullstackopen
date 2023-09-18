import { useState } from 'react'


const Button = ({ click, text }) => <button onClick={click}>{text}</button>;

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>;

const Statistic = ({ good, neutral, bad }) => {

  const list = [good, neutral, bad];
  const total = list.map((v) => v).reduce((a, b) => a + b, 0);
  const average = ((good - bad) / total).toFixed(2);
  const positive = ((good / total) * 100).toFixed(2);

  return (
    <>
      <h2>Statistics</h2>

      {
        good + neutral + bad === 0 ? (<p>No feedback given</p>) :
          (
            <table>
              <tbody>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="All" value={total} />
                <StatisticLine text="Average" value={average} />
                <StatisticLine text="Positive" value={positive} posfix="%" />
              </tbody>
            </table>
          )
      }
    </>
  )
}

const App = () => {

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addFeedback = (value) => {
    const act = {
      good: () => setGood(good + 1),
      neutral: () => setNeutral(neutral + 1),
      bad: () => setBad(bad + 1)
    }
    return act[value]();
  }


  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button click={() => addFeedback('good')} text="Good" />
        <Button click={() => addFeedback('neutral')} text="Neutral" />
        <Button click={() => addFeedback('bad')} text="Bad" />
      </div>

      <Statistic good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
