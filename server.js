/**
 * Created by lcorozco on 07-06-16.
 */
var http = require("http"),
    fs = require("fs")
var data = fs.readFileSync("./index.html");
http.createServer(function(req, res){
    console.log("Hello, this is my first node js app");
    res.writeHead(201,{"Content-Type":"application/json"});
    res.write(JSON.stringify({"Name":"Luis","LastName":"Orozco"}));
    //res.write(data);
    res.end();
}).listen(3000);