import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Route,Routes} from "react-router-dom"
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/Landing'
import Application from './pages/Application'

function App() {
    return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Application />} />
    </Routes>
  )
  
}

export default App
