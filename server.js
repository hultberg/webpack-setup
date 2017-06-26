// Thanks to: https://stackoverflow.com/a/8427954
var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(path.join(__dirname, 'public'))).listen(8080, function(){
    console.log('Server running on 8080...');
});
