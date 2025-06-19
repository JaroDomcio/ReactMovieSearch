import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <div>
      <MovieCard movie={{title: "First react app", release_date: "2025"}}></MovieCard>      
    </div>
  )
}



export default App
