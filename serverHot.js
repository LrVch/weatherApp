var static = require('node-static');
var file = new static.Server('.');


require('http').createServer(function (request, response) {
    console.log("in", request.url);
    file.serve(request, response);
}).listen(3000);

console.log("server is running on port 3000");