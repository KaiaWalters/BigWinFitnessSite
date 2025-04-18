import React, { createContext, useState, useEffect } from 'react'

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

    const login = (token, username, email) => {
        try {
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('userId', username)
            localStorage.setItem('userEmail', email) 

            setIsAuthenticated(true)
            setUserData({ token, username, email })

            setTimeout(() => (window.location.href = '/profile'), 1000)
        } catch (error) {
            console.error('Login error:', error)
            alert('error', 'Failed to log in. Please try again.')
        }
    }

    const requestAccess = async (token, email, message) => {
            fetch('http://localhost:3001/emailAdminNewRequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                console.log('Email sent successfully:', data)
                alert('success', 'Request access email sent successfully')
            })
            .catch((error) => {
                console.error('Error sending email:', error)
                alert('error', 'Failed to send request access email. Please try again.')
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
