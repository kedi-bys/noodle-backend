const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const computerInfoRouter = require('./routes/computer-info')
const deviceInfoRouter = require('./routes/device-info')

const app = express()

/**
 * Middlewares
 */
app.use(helmet())
app.use(compression())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

/**
 * RouteHandlers
 */
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/computer-info', computerInfoRouter)
app.use('/device-info', deviceInfoRouter)

module.exports = app
