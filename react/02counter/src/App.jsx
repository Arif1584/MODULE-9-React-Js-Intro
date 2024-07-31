import { useState } from 'react'
import "./App.css";



function App() {

  const [counter,setCounter]=useState(0)
  //let counter = 5

  const addValue = () => {
console.log("value added", counter);
//counter = counter + 1 
if (counter == 20){
  setCounter(counter = 20)
}
else{
  setCounter(counter+1)
}


  }

  const remValue = () => {
    if (counter > 0){
      setCounter(counter - 1)
    }
    else{
      setCounter(counter = 0)
    }

    
  }

  const resValue = () =>{
    setCounter(0)
   
 }
  
  return (
    <div className='Main'>
     <h1>Basic React</h1>
     <h2>Counter Value: {counter}</h2>

     <div className='Main_Container'>
     
     <button className='Container' id='add'
      onClick={addValue}>
        Add Value</button>
     <br />
     <button id='rem'
     onClick={remValue}
    >Remove Value</button>
    <br />
    <button id='res'
    onClick={resValue}
    >Reset</button>
    </div>

    </div>
  )
}

export default App
