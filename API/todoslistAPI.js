const axios = require('axios')
const  instance = axios.create({
  baseURL: "http://localhost:3000/todos",
  timeout: 1000,
  headers: { 'Content-Type': 'application/json'}
})


exports.getAllLIstAPI = () => {
    return instance.get('/')
}

exports.createtodolistAPI = async (body) => {
  return instance.post('/', body)
}

exports.deletetodolisttAPI = async (id) => {
  return instance.delete(`/${id}`)
}

exports.edittodoLIstAPI = async (id, body)=> {
  return instance.patch(`/${id}`, body)
}

exports.getlistbyIDAPI = async (id) => {
  return instance.get(`/${id}`)
}