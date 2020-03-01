var jwt = require('jsonwebtoken');
const fetch = require("node-fetch");
global.Headers = fetch.Headers;

var token = jwt.sign({typ:'JWT',alg:'HS256'},'87d74714-d7b8-4615-9d6d-aa7db5385576');
console.log(token);
/*const response = fetch('https://agentanswercenter--tst.custhelp.com/services/rest/connect/v1.3/incidents/10654347',{method:"GET",headers:{"Authorization":"Basic ZDBwMDEyaDpXYWxtYXJ0MQ=="}});

response.then((success)=>{
     success.text().then((bodyText)=>{console.log(bodyText)})
    
    
});*/

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "kkmpwqM4lg6LnFpH0L4zx2ytQigOcl5I3gj9ra3S");
myHeaders.append("Authorization", token);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
 // redirect: 'follow'
};

fetch("https://api.stellaconnect.net/v1/data/responses?start_date=2019-12-20T00:00:00-05:00&end_date=2019-12-20T00:59:59-05:00", requestOptions)
  .then(response => response.text())
  .then(
      result => {
        let obj = JSON.parse(result)
      obj.responses.forEach(function(element) {
            console.log(element.ext_interaction_id)
    }, this);}

).catch(error => console.log('error', error));

 
