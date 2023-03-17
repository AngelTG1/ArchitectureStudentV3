import React from 'react'
import LandingPages from '../pages/LandingPages'
import { Routes, Route } from 'react-router-dom'
import Shopping from '../components/organims/Shopping'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPages />}/>
        <Route path='/Tienda' element={<Shopping />} />
      </Routes>
    </div>
  )
}

export default App
