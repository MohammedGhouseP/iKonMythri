import { useState } from 'react'
import HomePage from './components/HomePage'
import myVideo from './assets/Blue-Modern-Technology-Youtube-Video-Intro.mp4'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline bg-red-300 '>Navbar</h1>
      <HomePage videoSrc={myVideo} />
    
      
    </>
  )
}

export default App
