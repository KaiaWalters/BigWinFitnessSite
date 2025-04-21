import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CurrentEventsPage from './pages/CurrentEventsPage'
import RegistrationPage from './pages/RegistrationPage'
import RegistrationConfirmationPage from './pages/RegistrationConfirmationPage'
import Navbar from './components/Navbar'
import { AuthProvider } from './contexts/AuthContext'
import AdminSigninPage from './pages/AdminSigninPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/events" element={<CurrentEventsPage/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/register/confirmation" element={<RegistrationConfirmationPage/>} />
          <Route path="/admin/signin" element={<AdminSigninPage/>}/>
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App