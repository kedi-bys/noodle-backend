const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { computerInfoConnection } = require('../database/connections')


const ComputerInfoSchema = new Schema({
  ComputerName: String,
  SerialNumber: String,
  Model: String,
  Manufacturer: String,
  InstallDate: String,
  UserName: String,
  OS: String,
  OSVersion: String,
  Status: String,
  ConnectionTime: String,
  PcConnectTime: String,
  TCPInfo: [{ IPv4: String, IPv6: String, MAC: String }]
})

module.exports = computerInfoConnection.model(
  'ComputerInfo',
  ComputerInfoSchema,
  'computer_info'
)
