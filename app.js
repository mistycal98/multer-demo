const express = require('express');

const multerRouter = require('./routes/multerRoutes');

const app = express();

const port = 3000;

app.use('/photo', multerRouter);
app.get('/', (req, res) => {
    res.send('home page');
})

app.listen(port, () => {
    console.log(`Started on https://localhost:${port}`);
})