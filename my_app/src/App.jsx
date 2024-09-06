import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Intro from './components/Intro'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/state' element={<Statebasics />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/n' element={<Name />} />
        <Route path='/a' element={<Api />} />
        <Route path='/p' element={<Pokemon />} />
      </Routes>
      
    </>
  )
}

export default App
