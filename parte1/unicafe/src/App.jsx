import { useState } from 'react'
import Button from './components/Button'
import Statistics  from './components/Statistics '

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

  const all=()=>{
    return good+neutral+bad;
  }

 const average=()=>{
  const total=all();
  if(total==0) return 0;
  return (good-bad)/total;
 }

 const positive=()=>{
  const total=all();
  if(total==0) return 0;
   return good*100/total;
 }

  return (
    <>
      <h1>Gife feedback</h1>
      <Button handleClick={handleClickGood} text="Good"/>
      <Button handleClick={handleClickNeutral} text={"Neutral"}/>
      <Button handleClick={handleClickBad} text={"Bad"}/>
      <h2>Statistics</h2>
      <Statistics  text="good" total={good}/>
      <Statistics  text="neutral" total={neutral}/>
      <Statistics  text="bad" total={bad}/>
      <h3> more statistics</h3>
      <Statistics  text="all" total={all()}/>
      <Statistics  text="average" total={average()}/>
      <Statistics  text="positive" total={positive()}/>
    </>
  )
}

export default App