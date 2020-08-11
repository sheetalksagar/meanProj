// index.js
// importing modules
var express = require("express"); // to include express

var app = express(); // create an Object

//port no
const port = 3000;

// Interacting with front-end
app.get("/", (req, res) => {
  res.send("<h1>Response from 'server'...!</h1>");
});

app.listen(port, () => console.log("Server started at port: " + port)); // testing Server
