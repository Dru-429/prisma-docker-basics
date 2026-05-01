import express from 'express'
import prisma from '../prismaClient.js'

const router = express.Router()

// Get all todos for logged-in user
router.get('/', async (req, res) => {

    const getTodos = prisma.todo.findMany({
        where:{
            userId: req.userId
        }
    })

    res.json(todos)
})

// Create a new todo
router.post('/', async (req, res) => {
    const { task } = req.body

    const newTodo =  await prisma.todo.create({
        data: {
            task,
            userId: req.userId
        }
    })

    res.json({ id: result.lastInsertRowid, task, completed: 0 })
})

// Update a todo
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params
    const { page } = req.query

    const updatedTodo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        date: {
            completed: !!completed
        }
    })

    res.json({ updatedTodo })
})

// Delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const userId = req.userId

    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            userId
        }
    })
    
    res.send({ message: "Todo deleted" })
})

export default router