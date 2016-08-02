/**
 * Created by lcorozco on 07-06-16.
 */
var http = require("http"), fs = require("fs"), parse =  require("./lib/module.js");
const server = http.createServer(function(req, res){
    p = parse.parse;
    res.writeHead(201,
        {
            /*"content-Type":"application/json"*/
            "content-Type":"text/html"
        }
    );
    fs.readFile("./index.html",function (err, html) {

        var html_string = html.toString();
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var paramsHash = p(req);
        for(var i = variables.length - 1; i >= 0 ; i --){
            //var value =  eval(variables[i].toString());
            html_string = html_string.replace("{"+variables[i]+"}",paramsHash[variables[i]]);
        }
        res.write(html_string);
        res.end();
    });

    //res.write(JSON.stringify({"Name":"Luis","LastName":"Orozco."}));
});
const hostname = '192.168.50.100';
const port = 3000;
server.listen(port,hostname,start);
function start() {
    console.log(`Server running at http://${hostname}:${port}/`);
}