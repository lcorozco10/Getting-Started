/**
 * Created by lcorozco on 07-06-16.
 */
var http = require("http");

var manager = function(req, resp){
    console.log("Hello, this is my first node js app");
    resp.end("Bye bye....:)");
};

var server = http.createServer(manager);
server.listen(3000);