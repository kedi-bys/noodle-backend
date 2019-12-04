const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const computerInfoConnection = mongoose.createConnection(
  process.env.COMPUTER_INFO_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
)
const printerStockConnection = mongoose.createConnection(
  process.env.PRINTER_STOCK_MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
)

module.exports = {
  computerInfoConnection,
  printerStockConnection
}
