var jwt = require('jsonwebtoken');
const fetch = require("node-fetch");
global.Headers = fetch.Headers;

var token = jwt.sign({typ:'JWT',alg:'HS256'},'6546-d7b8-6546-9d6d-6546456456');
console.log(token);
/*const response = fetch('https://agentanswercenter--tst.custhelp.com/services/rest/connect/v1.3/incidents/10654347',{method:"GET",headers:{"Authorization":"Basic ZDBwMDEyaDpXYWxtYXJ0MQ=="}});

response.then((success)=>{
     success.text().then((bodyText)=>{console.log(bodyText)})
    
    
});*/
// test api key eE1Riizlly8boI64jhokfviMZUjx5lA4oRj9GmH0
//prod api key kkmpwqM4lg6LnFpH0L4zx2ytQigOcl5I3gj9ra3S

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "6546546546546654654665465464");
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
            if(element.star_rating <= 3)
            {

            }
            console.log(element.ext_interaction_id)

    }, this);}

).catch(error => console.log('error', error));

 
