import express from "express";
import morgan from 'morgan';

const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const app = express();

app.disable("x-powered-by");

app.get('/node-ping', (req, res) => {
    res.end('pong');
});

app.use(morgan('combined'));

app.use((req, res)=> {
    res.redirect(301, `http://crystallography.io${req.path}`)
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`${(new Date().toLocaleString())} crystallography-redirects started on port ${PORT}`);
});
