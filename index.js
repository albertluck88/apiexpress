const express = require('express')
const app = express()
const port = 3000


const bodyParser = require("body-parser") // membuat parser jadi object

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

let todoList = [
    {

    description : "Learn React",
    done : false
},
{
    description : "Learn redux",
    done : false
}

]

//READ
app.get("/",(reg,res) => {
    res.send(todoList)
})

//READ
app.get('/todos',(req,res) => {
    res.send(todoList)
})

//CREATE
app.post('/todos',(req,res) => {
    todoList.push(req.body)
    res.send(todoList)
})


//Seacrh
app.get('/todos/seacrh', (req,res) => {
    const result = todoList.filter((todo,index) => {
    return todo.description === req.query.description || todo.done === JSON.parse(req.query.done)
})  
    res.send(result)
})

// READ ONE DATA
app.get('/todos/:index',(req,res) => {
    res.send(`read todo with id ${req.params.id}`)
})


// UPDATE
app.put('/todos/:index', (req,res) => {

    res.send(todoList[req.params.index])
})

// Delete 
app.delete('/todos/:index', (req,res) => {
    todoList.splice(req.params.index)
    res.send(todoList)
})

//DELETE ALL
app.delete('/todos', (req,res) => {
    todoList = []
    res.send(todoList)
})



app.listen(port, () => console.log("app runing on port 3000"))

