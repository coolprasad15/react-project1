// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-2xl'>Vite + Tailwind</h1>
      <Card username="Prasad" btnText="Click Me" />
      <Card username="Dhanashree" />
    </>
  )
}

export default App;
