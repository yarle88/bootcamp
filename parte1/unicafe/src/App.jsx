import { useState } from 'react'
import Button from './components/Button'
import Statistics  from './components/Statistics'


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  const handleClickGood=()=>{
    setGood(good+1);
    
  }
  const handleClickNeutral=()=>{
    setNeutral(neutral+1);
    
  }
  const handleClickBad=()=>{
    setBad(bad+1);
   
  }

 
  return (
    <>
      <h1>Give feedback</h1>
      <Button handleClick={handleClickGood} text="Good"/>
      <Button handleClick={handleClickNeutral} text={"Neutral"}/>
      <Button handleClick={handleClickBad} text={"Bad"}/>
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App