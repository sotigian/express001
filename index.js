const express = require('express')
const app = express()
const port = 3000

// app.get('') == app.get('/') under certain occasions
app.get('/', (req, res) => {
    console.log(`req=${req}`);
    console.log(`res=${res}`);
    res.send(`Hello World απο την Πανεπιστημιου 39!-------${req}`)
  })

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
        <form action="http://localhost:3000/a" method="post">
            Surname: <input type="text" name = "surname" title="surname"/>
            <button type = "submit">Submit</button>
        </form>
        <script>console.log("Hello")</script>
    </body>
    </html>`)
  })

  app.post('/a', (req, res) => {
    console.log(`req=${req}`);
    console.log(`res=${res}`);
    res.send(`Hello World απο την Πανεπιστημιου 39!-------${req}`)
  })

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})