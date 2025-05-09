require('dotenv').config({ path: `${__dirname}/.env` })
const express = require('express')
const app = express()
const main = require('./mongoose')

const authenticationRouter = require('./controllers/authentication')
const mailServiceRouter = require('./controllers/mailService')

const cors = require('cors')
const PORT = 3001

app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))
app.use(express.json())

app.use('/', mailServiceRouter) 
app.use('/auth', authenticationRouter)

//must go after routes or it will block them
app.use(main)

if (process.env.NODE_ENV !== 'test') {
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = {app}