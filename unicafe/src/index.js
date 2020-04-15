import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <div>
    <p>{props.text} {props.value}</p>
    </div>
  )
}
const ButtonComponent = (props) =>{
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if(props.total === 0){
    return (
      <div>
      <h1>Give feedback</h1>
      <ButtonComponent text="Good" onClick={() => {props.setGood(props.good + 1); props.setAverage(props.average + 1)}}/>
      <ButtonComponent text="Neutral" onClick={() => props.setNeutral(props.neutral + 1)}/>
      <ButtonComponent text="Bad" onClick={() => {props.setBad(props.bad + 1); props.setAverage(props.average - 1)}}/>
      <h1>Statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }else {
    return(
      <div>
      <h1>Give feedback</h1>
      <ButtonComponent text="Good" onClick={() => {props.setGood(props.good + 1); props.setAverage(props.average + 1)}}/>
      <ButtonComponent text="Neutral" onClick={() => props.setNeutral(props.neutral + 1)}/>
      <ButtonComponent text="Bad" onClick={() => {props.setBad(props.bad + 1); props.setAverage(props.average - 1)}}/>
      <h1>Statistics</h1>
      <Statistic text="Good:" value ={props.good} />
      <Statistic text="Neutral:" value ={props.neutral} />
      <Statistic text="Bad:" value ={props.bad} />
      <Statistic text="Total:" value ={props.total} />
      <Statistic text="Average:" value ={props.averagePreventNan()} />
      <Statistic text="Positive:" value ={props.positivePreventNaN()} />
      </div>
    )
  }

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
      return 0 + "%"
    }else {
      return good / total * 100 + "%"
    }
  }

  

  return (
    <div>
    <Statistics good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad} average={average} setAverage={setAverage}
     total={total} averagePreventNan={averagePreventNan} positivePreventNaN={positivePreventNaN}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)