import { useState } from 'react'
import Navbar from "./navbar/Navbar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nabar />
    </>
  )
}

export default App
