import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  
  const addValue = () => {
    // console.log("clicked", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  let message;
  if(counter < 0){
    message = 0
  }else if (counter > 10){
    message = 10
  }else{
    message = counter
  }

  return (
    <>
      <div>
        <h1>Prasad Counter</h1>
          <h3>Counter Value: {message}</h3>
        <button onClick = {addValue}>Add Value {message}</button>
        <br />
        <button onClick = {removeValue}>Remove Value {message}</button>
      </div>
    </>
  )
}

export default App;
