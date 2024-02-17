const express = require('express')
const { createTodo, readTodo, updateTodo, deleteTodo} = require('../controllers/todoController')

const Router = express.Router()

Router.post('/todo/create/:userId', createTodo)

Router.get('/todo/read/:userId', readTodo)

Router.post('/todo/update/:id', updateTodo)

Router.delete('/todo/delete/:id', deleteTodo)


module.exports = Router