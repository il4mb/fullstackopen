import { useState } from 'react'


const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Anacdote = ({ text, vote }) => <p>{text}<br/>has {vote} votes</p>

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


  const handleRandom = () => {
    return setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVote = () => {
    let copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  const getSelectedAnecdote = () => {
    return anecdotes[selected];
  }

  const getVoteSelected = () => {
    return votes[selected];
  }

  const getMostVoteAnecdote = () => {
    return anecdotes[votes.indexOf(getMaxVote())];
  }

  const getMaxVote = () => {
    return Math.max(...votes);
  }

  return (
    <div>

      <h1>Anecdote of the day</h1>
      <Anacdote text={getSelectedAnecdote()} vote={getVoteSelected()} />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleRandom} text='next anecdote' />

      <br/>

      <h2>Anecdote with most votes</h2>
      <Anacdote text={getMostVoteAnecdote()} vote={getMaxVote()} />

    </div>
  )
}
export default App;
