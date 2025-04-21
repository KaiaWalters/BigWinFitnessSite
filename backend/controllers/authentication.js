const User = require('../models/user.schema')
const jwt = require('jsonwebtoken')
const authenticationRouter = require('express').Router()

authenticationRouter.post('/login', async (req, res) => {

    const { username, password } = req.body
    console.log("req.body", req.body)
    console.log("username", username, "password", password)

    try {
        const user = await User.findOne({ username })
        console.log("user", user)

        if (!user) {
            return res
                .status(400)
                .json({ message: 'Invalid username or password' })
        }

        const isMatch = await user.comparePassword(password)

        if (!isMatch) {
            return res
                .status(400)
                .json({ message: 'Invalid username or password' })
        }

        const token = jwt.sign({ username, password }, 'xxx-xxx', {
            expiresIn: '1h',
        })

        res.json({ message: 'Login successful', token, user })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
})

authenticationRouter.post('/sign-up', async (req, res) => {
    try {
        const { email, password, username, isAdmin } = req.body

        const existingEmail = await User.findOne({ email })
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already in use' })
        }

        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: 'Username already in use' })
        }

        const user = new User({ email, password, username, isAdmin })

        const token = jwt.sign({ email, password, username, isAdmin }, 'xxx-xxx', {
            expiresIn: '1h',
        })

        await user.save()

        res.status(201).json({
            user,
            message: 'User registered successfully',
            token,
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
})

module.exports = authenticationRouter
