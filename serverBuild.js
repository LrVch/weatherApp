var static = require('node-static');
var file = new static.Server('.');


require('http').createServer(function (request, response) {
    console.log("in", request.url);
    if (request.url.indexOf("/app") !== -1) {
        console.log(request.url);
        request.url = '/build' + request.url;
    }
    
    file.serve(request, response);
}).listen(3000);

console.log("server is running on port 3000");