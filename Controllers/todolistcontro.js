const {getAllLIstAPI,createtodolistAPI,
  deletetodolisttAPI, edittodoLIstAPI, getlistbyIDAPI} = require('../API/todoslistAPI')


exports.todolists = async (req, res) => {
  try {
     const {data} = await getAllLIstAPI()
  res.render('home.ejs', {todos : data})
  } catch (error) {
    console.log(error)
  }
}

exports.createtodo = (req, res) => {
  res.render('create.ejs')
}

exports.addtodo = async (req, res)=> {
  try {
    const {name, item} = req.body
    const todo = await createtodolistAPI({name, item})
    res.status(302).redirect('/todos/home')
  } catch (error) {
    console.log(error)
  }
}

exports.getlistbyID = async (req, res) => {
  try {
    const item = await getlistbyIDAPI(req.params.id)
    res.render('Edit.ejs', {todos:item.data})
  } catch (error) {
    console.log(error)
  }
}
exports.updatedtod = async (req, res)=> {
  try {
    const id = req.params.id
    const {name , item} = req.body
    const result = await edittodoLIstAPI(id, {name , item})
    res.status(302).redirect('/todos/home')
  } catch (error) {
    
  }
}

exports.deleteItem = async (req, res) =>{
  try {
    const id = req.params.id
    const deletedtodo = await deletetodolisttAPI(id)
    res.redirect('/todos/home')
  } catch (error) {
    console.log(error)
  }
}