const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { printerStockConnection } = require('../database/connections')

const PrinterOidSchema = new Schema({
  oid: String,
  valueoid: String,
  descr: String,
  manufacturer: String,
  color: String,
  size: String,
  model: Array
})

module.exports = printerStockConnection.model(
  'PrinterOid',
  PrinterOidSchema,
  'oids'
)
