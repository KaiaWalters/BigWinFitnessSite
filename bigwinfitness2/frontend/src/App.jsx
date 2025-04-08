import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CurrentEventsPage from './pages/CurrentEventsPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/events" element={<CurrentEventsPage/>} />
      </Routes>
    </Router>
  )
}

export default App