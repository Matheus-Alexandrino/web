
import express from "express"
import { Screencast } from "phosphor-react";
import { routes } from "./routes";


const app = express();

app.use(express.json()); //middlware
app.use(routes);

app.listen(3330, () => {
    console.log('HTTP server running!');
});