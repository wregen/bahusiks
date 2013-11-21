var http = require('http'),
        express = require('express'),
        ecstatic = require('ecstatic'),
        directory = './www/',
        port = process.env.PORT || 8080;

var app = express();
app.use(ecstatic({root: directory}));
http.createServer(app).listen(port);
console.log('Listening on :' + port);

// CTRL+C (sigint)
process.on('SIGINT', function() {
    console.log("Gracefully shutting down from  SIGINT (Crtl-C)");
    process.exit( );
});