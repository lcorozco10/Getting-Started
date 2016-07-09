/**
 * Created by lcorozco on 07-06-16.
 */
var http = require("http"),
    fs = require("fs");
var data = fs.readFileSync("./index.html");
http.createServer(function(req, res){
    console.log("Hello, this is my first node js app");
    res.write(data);
    res.end("Bye bye....:)");
}).listen(3000);