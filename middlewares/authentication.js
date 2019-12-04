const { verify } = require('../helpers/token')

module.exports = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']


  if (!token) {
    return res.status(401).send('Access denied. No token provided.')
  }

  token = token.replace('Bearer ', '')
  if (!verify(token)) {
    return res.status(401).send('Access denied. Invalid token provided.')
  }

  next()
}
