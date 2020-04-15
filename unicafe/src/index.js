import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Statistics = (props) => {
  return(
    <div>
    <h1>Give feedback</h1>
    <button onClick={() => {props.setGood(props.good + 1); props.setAverage(props.average + 1)}}>good</button>
    <button onClick={() => props.setNeutral(props.neutral + 1)}>neutral</button>
    <button onClick={() => {props.setBad(props.bad + 1); props.setAverage(props.average - 1)}}>bad</button>
    <h1>Statistics</h1>
    <p>Good: {props.good}</p>
    <p>Neutral :{props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total: {props.total}</p>
    <p>Average: {props.averagePreventNan()}</p>
    <p>Positive: {props.positivePreventNaN()}%</p>
    </div>
  )
}
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
    <Statistics good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} average={average} setAverage={setAverage}
     total={total} averagePreventNan={averagePreventNan} positivePreventNaN={positivePreventNaN}></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)