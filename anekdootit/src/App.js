import React, { useState } from 'react'

 const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
) 

 const Winner = ({anecdotes, allVotes}) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerQuote = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerQuote]

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  )
}


const App = () => {
  
  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(7).fill(0))

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
 

 const handleAnecdoteClick = () => {
  const randomAnecdote = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomAnecdote)
    console.log(randomAnecdote)
  }

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] += 1
    setAllVotes(newAllVotes)
    console.log(allVotes)
    
  }

  return (
    <div>
      <h1>Quote of the day</h1>
      {anecdotes[selected]} {allVotes[selected]}
      <Button handleClick={handleAnecdoteClick} text="random quote"/>
      <Button handleClick={handleVoteClick} text="vote"/>
      <h1>Winner Quote</h1>
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

export default App