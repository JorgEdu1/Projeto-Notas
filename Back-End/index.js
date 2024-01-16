const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//import db
const conn = require('./db/conn');

//import models
const Notes = require('./models/notes');

//import routes
const notesRoute = require('./routes/notesRoute');

//import controllers
const notesController = require('./controllers/notesController');

//routes
app.use('/notes', notesRoute);

conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
}).catch((error) => {
    console.log(error);
});
