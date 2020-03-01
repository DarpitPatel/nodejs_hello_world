var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! Here we spin it up");

});

var port = 3000;
server.listen(port);

console.log("Server running at http://osc-sams.azurewebsites.net/:%d", port);



var cron = require('node-cron');

cron.schedule('* * * * *', () => {
 console.log('running a task every minute');
 fetch('https://agentanswercenter--tst.custhelp.com/services/rest/connect/v1.3/incidents/10654347', {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
        'Authorization': 'Basic ZDBwMDEyaDpXYWxtYXJ0MQ=='       
    }
}).then(responseJson => {
    var items = JSON.parse(responseJson._bodyInit);
    console.log(responseJson);

})
.catch(error => this.setState({
    isLoading: false,
    message: 'Something bad happened ' + error
}));




});
