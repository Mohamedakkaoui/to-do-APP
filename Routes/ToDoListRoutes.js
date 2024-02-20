const express = require('express')
const router = express.Router()
const {todolists,
  addtodo,
  createtodo,
  deleteItem,
  getlistbyID,
  updatedtod,
  } = require('../Controllers/todolistcontro')
const {validate} = require('../Middlewares/validate')
const {sanitizeInput}= require('../Middlewares/sanitize')

router.get('/home',todolists)
router.get('/create',createtodo)
router.post('/create', sanitizeInput,validate,addtodo)
router.get('/delete/:id', deleteItem)
router.get('/edit/:id', getlistbyID)
router.post('/edit/:id',sanitizeInput,validate,updatedtod)


module.exports = router