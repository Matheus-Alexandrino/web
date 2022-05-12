import express from 'express'

const app = express();


// GET


app.post('/feedbacks', (req, res) => { //controle de rotas
    return res.send('Phalla Dev!')
})
app.listen(3333, () => {
    console.log('HTTP server running!')
});