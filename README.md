# nodejsintro
Intro project for nodeJS packages

# nodejsintro
Intro project for nodeJS packages

-- Option 1
- create a folder, e.g. myproject
- cd myproject
- run git init
- run npm init
- create .gitignore
- create README.md
- add a LICENSE

-- Option 2
- create a folder something like js_projects
- cd js_projects
- git clone https://github.com/davidoster/nodejsintro2.git
- cd nodejsintro2 (possibly rename the folder if you want)
- delete .git folder
- git init
- follow the steps that we showed on video in order to publish the repository to github

-- Connect to a db and check the credentials of a user that tries to login
-- const my sql = require('mysql2');
-- const configDetails = {};
-- const connection = mysql.createConnection(configDetails);
-- connection.connect()
-- const sql = "SELECT * FROM users WHERE username = ? AND password = ?"
-- connection.execute(sql, [req.body.username, req.body.password])
