import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Demo from './components/Demo'


function App() {
  return (
   <main className="main">
   <Navbar />
   <Hero />
   <Demo className="demo-main" />
   </main>
  )
}

export default App