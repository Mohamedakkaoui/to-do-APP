const {check ,validationResult} = require('express-validator')

exports.validate = [
  check('name')
    .notEmpty()
    .withMessage('name is required')
    .escape()
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('name must contain only letters'),

  check('item')
    .notEmpty()
    .withMessage('item required')
    .escape()
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('name must contain only letters'),
    (req, res, next)=> {
      const errors = validationResult(req)
      if(!errors.isEmpty())
      {
        return res.status(400).json({errors: errors.array()})
      }
      next()
    }
]