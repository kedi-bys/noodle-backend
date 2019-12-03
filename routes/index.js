const express = require('express')
const router = express.Router()

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

router.post('/login', (req, res, next) => {
  res.status(400).end()
})

router.post('/register', (req, res, next) => {
  res.status(400).end()
})

module.exports = router
