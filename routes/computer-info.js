const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/authentication')

const ComputerInfo = require('../models/computer-info')

router.use(authMiddleware)

router.get('/', async (req, res, next) => {
  res.json(await ComputerInfo.find(req.query))
})

router.post('/', async (req, res, next) => {
  res.status(500).end()
})

module.exports = router
