var server = require('node-http-server');
var path = require('path');

server.deploy({
    port: process.env.PORT || 8080,
    root: path.join(__dirname, '/docs')
});
