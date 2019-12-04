const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { printerStockConnection } = require('../database/connections')

const PrinterDeviceInfoSchema = new Schema({
  ipAddress: String,
  date: Date,
  info: [{
    oid: String,
    label: String,
    value: String
  }]
})

module.exports = printerStockConnection.model(
  'PrinterDeviceInfo',
  PrinterDeviceInfoSchema,
  'deviceinfo'
)
