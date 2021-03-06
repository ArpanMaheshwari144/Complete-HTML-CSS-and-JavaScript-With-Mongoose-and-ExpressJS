// console.log("hello");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Style links and Buttons</title>
      <style>
          .container {
              border: 6px solid #00ffb3;
              background-color: rgb(121, 65, 129);
              padding: 47px;
              margin: 42px auto;
              width: 678px;
              border-radius: 43px;
          }
  
          a {
              text-decoration: none;
              color: black
          }
  
          a:hover {
              color: rgb(228, 60, 60);
              background-color: rgb(15, 79, 218);
          }
  
          a:visited {
              background-color: rgb(92, 81, 112);
          }
  
          a:active {
              background-color: darkblue;
          }
  
          .btn {
              font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
              font-weight: bold;
              background-color: crimson;
              padding: 10px;
              border: none;
              cursor: pointer;
              font-size: 15px;
              border-radius: 19px;
          }
  
          .btn:hover {
              color: rgb(5, 0, 0);
              background-color: rgb(78, 124, 56);
              border: 2px solid black;
          }
  
          .btn:visited {
              background-color: rgb(57, 109, 122);
          }
  
          .btn:active {
              background-color: darkblue;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h2>This is my heading</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus repellat nam adipisci eligendi neque
              beatae veritatis delectus sequi, ipsam eaque ullam aspernatur ea quod ipsum natus at facilis? Eos nulla in
              earum provident!</p>
          <a class="btn" href="https://www.google.com/">Read More</a>
          <button type="button" class="btn">Contact us</button>
      </div>
  </body>
  
  </html>`)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});