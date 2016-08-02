function parse(req) {
    var params = [], paramsHash = {};
    if(req.url.indexOf("?") > 0){
        var url_data =  req.url.split('?');
        params =  url_data[1].split('&');
    }

    for(var i = params.length - 1; i >= 0 ; i --){
        var parameter = params[i];
        var parameter_data =  parameter.split('=');
        paramsHash[parameter_data[0]] = parameter_data[1];
    }
    paramsHash["today"] =  new Date().toISOString();
    return paramsHash;
}

module.exports.parse =  parse;