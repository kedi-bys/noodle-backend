module.exports = io => {
  const express = require('express')
  const router = express.Router()

  const authMiddleware = require('../middlewares/authentication')

  const PrinterOid = require('../models/printer-oid.model')

  router.use(authMiddleware)

  router.get('/', async (req, res, next) => {
    let { limit = 20, offset = 0 } = req.query

    // limit ve offset'in number olduğundan emin ol.
    limit = +limit
    offset = +offset

    // limit değeri 100'den büyük olmamalı.
    limit = limit > 100 ? 100 : limit

    // limit ve offset dışındaki query değerlerini sorgulama için topla.
    let query = JSON.parse(JSON.stringify(req.query))
    delete query.limit
    delete query.offset

    res.json(await PrinterOid.find(query).skip(offset).limit(limit))
  })

  router.post('/', async (req, res, next) => {
    res.status(500).end()
  })

  return router
}
