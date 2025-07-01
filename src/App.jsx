import './css/App.css'
import Home from './pages/home.jsx'
import { Routes, Route } from 'react-router-dom'
import Favourites from './pages/favourites.jsx'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext.jsx'

function App() {

  return (
    <div>
      <MovieProvider>
      <NavBar />
        <main className = "main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}



export default App
