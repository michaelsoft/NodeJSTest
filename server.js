var express = require('express');
var app = express();
var fs = require("fs");
var querystring = require('querystring');
var users = [];
var maxUserId = 0;

app.get('/listUsers', function (req, res) {
   res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
   res.end(users);
})

app.get('/addUser/:userName', function (req, res) {
    var userId = ++ maxUserId;
    var userName = req.params.userName;
    console.log ("Creating " + userName);
    var newUser = { "userId": userId, "userName": userName};
    users.push(newUser);

    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    res.end();
 })

app.post('/addUser2', function (req, res) {
    
    var userId = ++ maxUserId;
    var body = querystring.parse(req.body);
    console.log(JSON.stringify(body));
    var userName = body.userName;
    //var userName = req.params["userName"].toString();
    var newUser = { "userId": userId, "userName": userName};
    users.push(newUser);
 })

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})