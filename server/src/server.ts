import express from 'express'

const app = express();

app.get('/users', (req, res) => { //controle de rotas
    return res.send('Phalla Devs!')
})
app.listen(3333, () => {
    console.log('HTTP server running!')
});