const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const compression = require('compression')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')

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

module.exports = app
