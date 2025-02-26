import { Router } from 'express';
import { createUser, createUsers, deleteUser, getAllUsers, getUserByEmail, updateUser } from '../services/user';
import { count } from 'console';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'teste2',
        email: 'teste212.dev@gmail.com',
        Post: {
            create: {
                title: 'titulo de teste do testador 2',
                body: 'corpo de teste '
            }
        }
    })
    if (user) {
        res.status(201).json({ user })
    }
})


mainRouter.post('/users', async (req, res) => {

    const result = await createUsers([
        { name: "jão", email: 'joao@hotmail.com' },
        { name: "joão", email: 'jao@hotmail.com' },
        { name: "Marcos", email: 'marcos@gmail.com' },
        { name: "Marcos2", email: 'marcos@gmail.com' },
        { name: "marcela", email: 'eduguerra0202@gmail.com' },

    ])

    res.json({ result })
})

mainRouter.get("/users", async (req, res) => {
    const result = await getAllUsers()
    res.json({ result })
})

mainRouter.get('/user', async (req, res) => {
    const result = await getUserByEmail('edduansbbs@gmail.com')
    res.json({ result })
})


mainRouter.put('/user', async (req, res) => {
    const result = await updateUser();
    res.json({ result })
})

mainRouter.delete('/userd', async (req, res) => {
    const result = await deleteUser()
    res.json({ result })
})
