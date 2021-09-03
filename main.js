// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000;

// db connection
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true}, () => console.log("Connected to the database!"));
const db = mongoose.connection;
db.on('error', (e) => console.log(e));
//db.once('open', );

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(
    session({
        secret: 'my secret key',
        saveUninitialized: true,
        resave: false
    })
);

app.get('/', (req, res) =>{
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});