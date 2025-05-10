import express from 'express'
import { PrismaClient } from './generated/prisma/client.js'

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.post('/users', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }

    })

    res.status(201).json(req.body);
});

app.get('/users', async (req, res) => {

    const usuarios = await prisma.user.findMany();

    res.status(200).json(usuarios);

});


app.put('/users/:id', async (req, res) => {

    console.log(req);
    await prisma.user.update({
        where: {
            id: req.params.id
        },

        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }

    })

    res.status(201).json(req.body);
});

app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
})



app.listen(3000);
