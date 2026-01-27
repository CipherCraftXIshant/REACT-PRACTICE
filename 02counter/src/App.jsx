import { useState } from 'react' // hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] =  useState(15)

  // let counter = 5;

  const addValue = () => {
    // counter++;
    if(counter<20){
    setCounter(counter+1)
    console.log("clicked" , counter);
    }
    else{
      console.log("counter cant get above 20");
    }
  }

  const removeValue = () => {
    if(counter>0){
      setCounter(counter-1);
    }
    else{
      console.log("Counter cant go beyond 0")
    }
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={addValue} >Add Value</button>
      <br />
      <button onClick={removeValue} >Remove Value</button>
    </>
  )
}

export default App
