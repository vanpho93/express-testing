const express = require('express');
const parser = require('body-parser').json();
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Everything is OK!');
});

app.post('/testing', parser, (req, res) => {
    const { num } = req.body;
    // Tra ve binh phuong cua so nhap vao
    res.status(201).send(num * num + '');
});

module.exports = app;
// Test with postman
// Test with mocha
