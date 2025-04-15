import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { LANDINGPAGE } from './routes'

function App() {

  return (
    <Routes>
      <Route path={LANDINGPAGE} element={<LandingPage/> }></Route>
    </Routes>
  )
}

export default App
