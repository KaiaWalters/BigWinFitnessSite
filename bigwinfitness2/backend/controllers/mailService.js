const mailServiceRouter = require('express').Router()
const mailService = require('./mailService')

mailServiceRouter.post('/emailAdminNewRequest', async (req, res) => {
    console.log('Inside emailAdminNewRequest route', req.body)

    const {firstName, lastName, email, userWhy} = req.body

    try {
        mailService.main({ email,firstName, lastName, userWhy })
        console.log('Email sent successfully')
        res.json({ message: 'Email sent successfully for: ', token, user })
    } catch (error) {
        res.status(500).json({ message: 'Mail service failed to send', error: error.message })
    }
})

module.exports = mailServiceRouter
