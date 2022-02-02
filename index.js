let mysql = require("mysql2");
const express = require('express');
const app = express();
const port = 3000;
let connected = false;

app.use(express.urlencoded({ extended: true }));

// app.get('') == app.get('/') under certain occasions
// homepage
app.get('/', (req, res) => {
    res.send(`Hello World από την Πανεπιστημίου 39!`)
})

// /hello
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
      <h1>Hello George!</h1>`);
})

// some test /a
// shall we change it to /login ?
app.get('/login', (req, res) => {
    if (connected) {
        res.send(`Hello World από την Πανεπιστημίου 39! - You are already logged in!`);
    } else {
        res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="http://localhost:3000/login" method="POST">
            Username: <input type="text" name = "username" title="username" /><br/> 
            Password: <input type="password" name = "password" title="password" /><br/>
            <button type="submit">Login</button>
        </form>
        <script>console.log("Hello")</script>
    </body>
    </html>`);
    }

})

// some test to accept a value from a form 
// shall we change it to /login ?
app.post('/login', async (req, res) => {
    let loginResult = await checkLoginDetails(req.body.username, req.body.password);
    if (loginResult) {
        connected = true;
        res.send(`Hello World από την Πανεπιστημίου 39! - ${req.body.username} - ${req.body.password}, result = ${loginResult}`);
    } else {
        res.send("Get out of here!");
    }
})

app.get('/logout', (req, res) => {
    connected = false;
    res.send("You are logged out!");
})

// start the web server e.g. express
app.listen(port, () => {
    console.log(`DB app listening on port ${port}`);
})

// this is the business logic of the login procedure
async function checkLoginDetails(username, password) {
    try {
        let dbResult = await dbLogin(username, password);
        // correct credentials
        if (dbResult) {
            return (true);
        }
        // wrong credentials
        // where is the else part???????
    }
    
    catch (error) {
        return (false);
    }
}

async function dbLogin(username, password) {
    const poolConfigDetails = {
        connectionLimit: 1,
        host: 'ra1.anystream.eu',
        port: '5420',
        user: 'cb12ptjs',
        password: 'cb12ptjs',
        database: 'cb12ptjs'
    };
    const pool = mysql.createPool(poolConfigDetails);
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    return (new Promise(
        (resolve, reject) => {
            pool.execute(sql, [username, password], (error, rows) => {
                if (error) {
                    pool.end();
                    return (reject(error));
                } else {
                    if (rows.length == 1) {
                        pool.end();
                        return (resolve(true));
                    }
                    // rows.length != 1
                    else {
                        pool.end();
                        return (resolve(false));
                    }
                }
            })
        }
    ));
}