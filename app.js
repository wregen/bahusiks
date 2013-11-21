var flatiron = require('flatiron'),
        ecstatic = require('ecstatic'),
        app = flatiron.app,
        path = require('path'),
        directory = './www/',
        port = 8080;

// flatiron plugins
app.use(flatiron.plugins.http);

// flatiron - ecstatic (server resources from directory - html, css, js, images)
app.http.before = [
    ecstatic(directory)
];

app.start(port);
app.log.info("App started on port " + port);
// CTRL+C (sigint)
process.on('SIGINT', function() {
    console.log("Gracefully shutting down from  SIGINT (Crtl-C)");
    process.exit( );
});