import { useState } from 'react'

import TopSide from './components/TopSide'
import Buttons from './components/Buttons'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
function App() {
  return (
    <div className='container'>
      <TopSide />
      <Buttons />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App
