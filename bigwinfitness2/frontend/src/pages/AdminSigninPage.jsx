import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const AdminSigninPage = () => {
    const initialFormValues = {
        userName: '', 
        password: '', 
    }

    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
            })

            if (response.ok) {
                const data = await response.json()
                const token = data.token

                if (token) {
                    login(token, data.user.username, data.user.email) 
                    navigate('/profile')
                } else {
                    console.error('No token found in the response')
                }
            } else {
                const errorMessage = await response.json()
                console.error('Error logging in:', errorMessage)
                alert(`Error logging in: ${errorMessage.message}`)
            }
        } catch (error) {
            console.error('Network error:', error)
            alert('Network error', error)
        }
    }

    return (
        <div>
            <div className="login-container">
                <h2 className="login-title">Log In</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Enter your username"
                            className="input-field"
                            required
                            value={formValues.userName}
                            onChange={(e) => setFormValues({...formValues, userName: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input-field"
                            required
                            value={formValues.password}
                            onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Log In
                    </button>
                    <span>Don't have an account?
                        <NavLink to='/register' style={{ textDecoration: 'none', color: '#007bff', marginLeft: '5px' }}>
                        <span>Request access</span>
                        </NavLink> 
                    </span>
                </form>

                <p style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>
                    Welcome back! Log in to continue.
                </p>
            </div>

            <style jsx>{`
                .login-container {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f8f8f8;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .login-title {
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                }

                .login-form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }

                label {
                    font-size: 14px;
                    color: #555;
                }

                .input-field {
                    padding: 10px;
                    font-size: 14px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    outline: none;
                    width: 100%;
                    box-sizing: border-box;
                }

                .input-field:focus {
                    border-color: #007bff;
                }

                .submit-button {
                    padding: 12px;
                    background-color: #007bff;
                    color: white;
                    font-size: 16px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                .submit-button:hover {
                    background-color: #0056b3;
                }
            `}</style>
        </div>
    )
}

export default AdminSigninPage
