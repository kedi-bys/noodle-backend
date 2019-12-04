const dotenv = require('dotenv')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

dotenv.config()
mongoose.connect(process.env.COMPUTER_INFO_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

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

module.exports = mongoose.model(
  'ComputerInfo',
  ComputerInfoSchema,
  'computer_info'
)
