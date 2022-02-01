const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));

// app.get('') == app.get('/') under certain occasions
// homepage
app.get('/', (req, res) => {
    //console.log(`req=${req}`);
    //console.log(`res=${res}`);
    res.send(`Hello World απο την Πανεπιστημιου 39!`)
  })

  // some test /a
  app.get('/a', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="http://localhost:3000/a" method="POST">
            Username: <input type="text" name = "username" title="username"/><br/>
            Password: <input type="password" name = "password" title="password"/><br/>
            <button type = "submit">Login</button>
        </form>
        <script>console.log("Hello")</script>
    </body>
    </html>`)
  })

  // some test to accept a value from a form
  app.post('/a', (req, res) => {
    let loginResult = checkLoginDetails(req.body.username, req.body.password);
    if(loginResult) {
      res.send(`Hello World απο την Πανεπιστημιου 39! - ${req.body.username} - ${req.body.password}`)
    }
    res.send("Get out of here...")
  })

  //  /hello
app.get('/hello', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <h1>Hello George!<h1/>
  </body>
  </html>`)
})

// start the web server e.g. express
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.listen(3001, () => {
//  console.log(`Example app listening on port ${port}`)
//})

console.log(`app listening on port ${port}`);
