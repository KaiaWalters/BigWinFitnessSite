import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CurrentEventsPage from './pages/CurrentEventsPage'

const App = () => {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">home</Link>
        <Link style={padding} to="/events">events</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<CurrentEventsPage />} />
      </Routes>

      <div>
        <i>Big Win Fitness</i>
      </div>
    </Router>
  )
}

export default App