import { prisma } from "./prisma";
import express from "express"
import { Screencast } from "phosphor-react";
import nodemailer from 'nodemailer'


const app = express();

app.use(express.json()); //middlware

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "367922509ed45a",
        pass: "9e4cbcdea2dbe8"
    }
});
// GET
app.post('/feedbacks', async (req, res) => {
    const{ type, comment, screenshot} = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    })

    transport.sendMail({
        from: 'Equipe Feedget <feed@get.com>',
        to: 'Matheus Aleandrino <matwsalmeida@gmail.com>',
        subject: ' Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16 px; color: #111">`,
            `<p> Tipo do Feedback: ${type}</p>`,
            `<p> Comentário: ${comment}</p>`,
            `</div>`,
        ].join('\n')
    });


    return res.status(201).json({data: feedback});
});

app.listen(3330, () => {
    console.log('HTTP server running!');
});