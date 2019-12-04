const express = require('express')
const router = express.Router()

const authentication = require('../helpers/authentication')
const { sign } = require('../helpers/token')

/**
 *  GET /
 * Sunucunun durumu ile ilgili bilgi döndürür.
 * { status: 'active', uptime: '15m 24s', version: '1.0.0' }
 */
// TODO: Uptime'ı ${days}d ${minutes}m ${seconds}s formatına getir.
router.get('/', (req, res, next) => {
  res.json({
    status: 'active',
    uptime: process.uptime(),
    version: '0.1.0',
    time: Date()
  })
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body

  try {
    const result = await authentication(username, password)
    const token = sign({ username: result.username })
    res.status(200).json({ username: result.username, token }).end()
  } catch (e) {
    console.log(e)
    res.status(400).end()
  }
})

module.exports = router
