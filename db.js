var mysql = require('mysql');

var connect = mysql.createConnection({
  host: "localhost",
  user: "muskang",
  password: "boogie",
  database: "project"
});

function adduser(child, date, parent, contact, email, username, password){
  return new Promise (function(resolve, reject){

    connect.query(`INSERT INTO persons (child, date, parent, contact, email, username, password) VALUES (?,?,?,?,?,?,?)`, [child, date, parent, contact, email, username, password], function(err, results){
      if(err) reject(err)
      else resolve()
    })
  })
}

function checkuser(username, password){
  return new Promise (function(resolve, reject){

    connect.query(`SELECT* FROM  persons where username=? and password=?`, [username, password], function(err, rows, cols){
      if(rows.length>0) resolve()
      else reject()
    })
  })
}
exports = module.exports = {
  adduser,checkuser
}