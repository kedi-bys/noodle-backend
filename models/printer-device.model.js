const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { printerStockConnection } = require('../database/connections')

const PrinterDeviceSchema = new Schema({
  ipAddress: String,
  manufacturer: String,
  status: String
})

module.exports = printerStockConnection.model(
  'PrinterDevice',
  PrinterDeviceSchema,
  'devices'
)
