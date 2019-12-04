const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/authentication')

router.use(authMiddleware)
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

module.exports = router
