/*var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! Here we spin it up");

});

var port = 3000;
server.listen(port);

console.log("Server running at http://osc-sams.azurewebsites.net/:%d", port);

*/

var cron = require('node-cron');

cron.schedule('* * * * *', () => {
 console.log('running a task every minute');
});
