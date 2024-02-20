const xss = require('xss')

exports.sanitizeInput = (req, res, next) => {
  const fields = ['name','item']
    for(i in fields) {
        if(req.body[fields[i]]) {
            req.body[fields[i]] = xss(req.body[fields[i]])
        }
    }
    next()
}