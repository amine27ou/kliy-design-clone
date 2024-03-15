import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import SimpleSlider from './components/SimpleSlider'
import About from './components/About'
import Team from './components/Team'
import Services1 from './components/Services1'
import Projects from './components/Projects'
import Services2 from './components/Services2'
import Packs from './components/Packs'
import Companies from './components/Companies'
import Contact from './components/Contact'
import Info from './components/Info'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'

function App() {
  return (
    <div className='bg-neutral-800 w-full'>
        <Header/>
        <SimpleSlider/>
        <About/>
        <Team/>
        <Services1/>
        <Projects/>
        <Services2/>
        <Packs/>
        <Companies/>
        <Contact/>
        <Info/>
        <Footer/>
        <Whatsapp/>
    </div>
  )
}

export default App
