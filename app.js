const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const socketio = require('socket.io')

const app = express()

/**
 * Setup socket.io
 */
const io = socketio()
app.io = io

const indexRouter = require('./routes/index')(io)
const usersRouter = require('./routes/users')(io)
const computerModelRouter = require('./routes/computer-model')(io)
const computerInfoRouter = require('./routes/computer-info')(io)
const printerDeviceRouter = require('./routes/printer-device')(io)
const printerDeviceInfoRouter = require('./routes/printer-device-info')(io)
const printerOidRouter = require('./routes/printer-oid')(io)

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
app.use('/computer-model', computerModelRouter)
app.use('/computer-info', computerInfoRouter)
app.use('/printer-device', printerDeviceRouter)
app.use('/printer-device-info', printerDeviceInfoRouter)
app.use('/printer-oid', printerOidRouter)

module.exports = app
