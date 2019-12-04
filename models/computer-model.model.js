const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { computerInfoConnection } = require('../database/connections')


const ComputerModelSchema = new Schema({
  code: String,
  name: String
})

module.exports = computerInfoConnection.model(
  'ComputerModel',
  ComputerModelSchema,
  'model_info'
)
