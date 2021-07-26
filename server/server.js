const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.listen(3333, console.log('server is running'))
