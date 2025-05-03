import express from 'express'

const app = express()

const users = []

app.post('/users', (req, res) => {
    console.log(req)

    res.send('ok, deu bom dnv')
})

app.get('/users', (req, res) => {
    res.send('ok, bom dms man')
})



app.listen(3000)
