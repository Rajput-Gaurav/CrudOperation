// Create a Server:
const http = require('http');
const express = require('express');
const app = require("./app");

// create PORT:
const PORT = 3000;
// initialize express:
// app = express.Router();
// create SERVER:
const server = http.createServer(app);

server.listen(PORT, ()=> {
    console.log("Server started on PORT::" +PORT);
});