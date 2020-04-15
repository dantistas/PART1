import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0)
  let total = good + neutral + bad
  const averagePreventNan = () => {
    if(total === 0){
      return 0
    }else{
      return average/total
    }
  }
  const positivePreventNaN = () => {
    if(total === 0 ){
      return 0
    }else {
      return good / total * 100 
    }
  }

  

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => {setGood(good + 1); setAverage(average + 1)}}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => {setBad(bad + 1); setAverage(average - 1)}}>bad</button>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral :{neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {averagePreventNan()}</p>
      <p>Positive: {positivePreventNaN()}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)