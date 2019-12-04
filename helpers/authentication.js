const ActiveDirectory = require('activedirectory')
const dotenv = require('dotenv')

module.exports = async (username, password) => {
  dotenv.config()
  const cfg = {
    url: process.env.AD_URL,
    baseDN: process.env.AD_BASE_DN,
    dc: process.env.AD_DC
  }

  const ad = new ActiveDirectory(cfg)

  return new Promise((resolve, reject) => {
    ad.authenticate(username + cfg.dc, password, (err, auth) => {
      // ActiveDirectory user does not exist
      if (err) {
        reject({
          status: 'error',
          error: err
        })
      }
      // ActiveDirectory user exists
      else {
        // Authentication successful
        if (auth) {
          resolve({
            status: 'success',
            username
          })
        }
        // Authentication failed
        else {
          reject({
            status: 'failed',
            error: 'Authentication failed'
          })
        }
      }
    })
  })
}
