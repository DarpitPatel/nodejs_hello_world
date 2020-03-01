var jwt = require('jsonwebtoken');
var token = jwt.sign({typ:'JWT',alg:'HS256'},'87d74714-d7b8-4615-9d6d-aa7db5385576');
console.log(token);
const fetch = require("node-fetch");
const response = fetch('https://agentanswercenter--tst.custhelp.com/services/rest/connect/v1.3/incidents/10654347',{method:"GET",headers:{"Authorization":"Basic ZDBwMDEyaDpXYWxtYXJ0MQ=="}});

response.then((success)=>{
     success.text().then((bodyText)=>{console.log(bodyText)})
     //console.log(success.json);
    
});



 
