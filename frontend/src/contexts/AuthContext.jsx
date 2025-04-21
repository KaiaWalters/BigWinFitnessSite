import React, { createContext, useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('jwtToken')
        const storedUsername = localStorage.getItem('userId')
        const storedEmail = localStorage.getItem('userEmail') 

        setIsAuthenticated(!!token) // Ensure boolean value
        setUserData(token ? { token, storedUsername, storedEmail } : null)
        setLoading(false)
    }, [])

    if (loading) {
        return null 
    }

    const logout = () => {
        try {
            // Clear storage and abort ongoing requests
            localStorage.removeItem('jwtToken')
            localStorage.removeItem('userId')
            localStorage.removeItem('userEmail') 
            setIsAuthenticated(false)

            setTimeout(() => (window.location.href = '/login'), 1000)
        } catch (error) {
            console.error('Logout error:', error)
            alert('error', 'Failed to log out. Please try again.')
        }
    }

    const login = (token, username, email, isAdmin) => {
        try {
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('userId', username)
            localStorage.setItem('userEmail', email) 
            localStorage.setItem('isAdmin', isAdmin)

            setIsAuthenticated(true)
            setUserData({ token, username, email, isAdmin })

            setTimeout(() => (window.location.href = '/profile'), 1000)
        } catch (error) {
            console.error('Login error:', error)
            alert('error', 'Failed to log in. Please try again.')
        }
    }

    const requestAccess = async (data) => {
        console.log("request context", data)
            fetch('http://localhost:3001/emailAdminNewRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return <Navigate to="/" />
            })
            .then((data) => {
                console.log('Email sent successfully:', data)
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })
            console.log('Request access email sent successfully')
    }

    return (
        <AuthContext.Provider
            value={
                { 
                 isAuthenticated,
                 login, 
                 logout, 
                 requestAccess, 
                 userData 
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
