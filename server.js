const express = require('express')
const app = express()
require('dotenv').config()
const Port = process.env.PORT || 1400
const todolist_router = require('./Routes/ToDoListRoutes')
app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: true  }))
app.use(express.json())
app.use('/todos',todolist_router)


app.use(express.static('public'))
// app.get('/home', (req, res)=> {
//   res.render('home.ejs', {itemlist})
// })

// app.get('/create', (req, res)=> {
//   res.render('create.ejs')
// })
// app.post('/create', (req, res) => {
//   const {name ,authorId, item} = req.body
//   itemlist.push({authorId, item, name})
//   res.status(200).redirect('/home')
// })


app.listen(Port, ()=> {
  console.log(`listening on port : ${Port}`)
})