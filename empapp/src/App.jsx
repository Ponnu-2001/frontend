import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Addemp from './Components/Addemp'
import { Route, Routes } from 'react-router-dom'
import Viewemp from './Components/Viewemp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>Welcome React</h1>
      <Routes>
        <Route path="/Addemp" element={<Addemp />}></Route>
        <Route path="/Viewemp" element={<Viewemp />}></Route>
      </Routes>
    </>
  )
}

export default App
