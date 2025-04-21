import React, { useState, useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

const RegistrationPage = () => {
    const initialFormValues = {
        firstName: '', 
        lastName: '', 
        email: '', 
        whyStatement: ''
    }

    const { requestAccess } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            requestAccess(formValues) 
            navigate('/register/confirmation')          
        } catch (error) {
            console.error('Network error:', error)
            alert('Network error', error)
        }
    }

    return (
        <div>
            <div className="signup-container">
                <h2 className="signup-title">Sign Up</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            className="input-field"
                            required
                            value={formValues.firstName}
                            onChange={(e) => setFormValues({...formValues, firstName: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            className="input-field"
                            value={formValues.lastName}
                            onChange={(e) => setFormValues({...formValues, lastName: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input-field"
                            value={formValues.email}
                            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="whyStatement">Your why</label>
                        <input
                            type="text"
                            id="whyStatement"
                            name="whyStatement"
                            placeholder="Why do you want to join Big Win Fitness?"
                            className="input-field"
                            value={formValues.whyStatement}
                            onChange={(e) => setFormValues({...formValues, whyStatement: e.target.value})}
                            required    
                        />
                    </div>
                    <button type="submit" className="submit-button">
                        Sign Up
                    </button>
                    <span>Already have an account?
                        <NavLink to='/login'>
                        <span> Sign in</span>
                        </NavLink> 
                    </span>
                </form>

                <p style={{ textAlign: 'center', marginTop: '20px', color: '#555' }}>
                    Join the Hitlist today and land your dream job!
                </p>



            </div>

            <style jsx>{`
                .signup-container {
                    max-width: 400px;
                    margin: 50px auto;
                    padding: 20px;
                    background-color: #f8f8f8;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .signup-title {
                    text-align: center;
                    font-size: 24px;
                    margin-bottom: 20px;
                    color: #333;
                }

                .signup-form {
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

export default RegistrationPage
