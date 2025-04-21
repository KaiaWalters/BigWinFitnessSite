import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CurrentEventsPage from './pages/CurrentEventsPage'
import RegistrationPage from './pages/RegistrationPage'
import Navbar from './components/Navbar'
import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/events" element={<CurrentEventsPage/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/profile" element={<>Your profile</>} />
          <Route path="/events/admin" element={<>Admin event management page</>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App