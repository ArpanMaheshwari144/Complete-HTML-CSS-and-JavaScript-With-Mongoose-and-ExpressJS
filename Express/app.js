// cd Express then node app.js
// open browser then type localhost:80 or go to postman and select get request the write localhost:80
const express = require("express"); // express module ko import kiya
const path = require("path");
const app = express();
const port = 80;

// for serving static files 
// '/staic'->url and ('static')->folder
app.use('/static', express.static('static'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the view directory
app.set('views', path.join(__dirname, 'views'));

// our pug demo endpoint
app.get("/demo", (req, res) => {
    res.status(200).render('demo', {
        title: 'hey',
        message: 'hello pug'
    });
});

// app.get("/",(req,res)=>{
//     res.send("This is home page of my first express app");
// });
//or
app.get("/", (req, res) => {
    res.status(200).send("This is home page of my first express app");
});

app.get("/about", (req, res) => {
    res.send("This is get request about page of my first express app");
});

app.get("/this", (req, res) => {
    res.status(404).send("This page is not found");
});

app.post("/about", (req, res) => {
    res.send("This is post request about page of my first express app");
});

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});