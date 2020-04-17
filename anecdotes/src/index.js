import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const MostVoted = (props) =>{
  if(props.votes.reduce((a, b) => a + b, 0) === 0 ){
    return (
      <div>
        <h1>Anecdote with most votes </h1>
        <p>There are no votes yet.</p>
      </div>
    )
  }else {
    return (
      <div>
        <h1>Anecdote with most votes </h1>
        <p>{props.anecdotes[props.index()]}</p>
        <p>This anecdote has {props.votes[props.index()]} votes </p>
      </div>
    )
  }


}


const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
  let copy = [...votes]
  const vote = (x) => {
    copy[x] += 1
    setVotes(copy)
  }

  const index = () => {
    const biggestNumber = Math.max(...votes)
    return votes.indexOf(biggestNumber)

  }


  const random = (min, max) =>{
      return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>This anecdote has {votes[selected]} votes </p>
      <div>
         <button onClick={ () => {vote(selected)} }>vote</button>
         <button onClick={ () => {setSelected(random(0, props.anecdotes.length))} }>next anecdote</button>  
      </div>
      <div>
        <MostVoted index={index} anecdotes={props.anecdotes} votes={votes}/>
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)