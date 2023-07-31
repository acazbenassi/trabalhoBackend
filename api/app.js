const express = require('express');
const app = express();


app.get('/',function(req, res){
res.send("olá mundo")



});


app.listen(8080, function(){
console.log("servidor rodando port 8080 XD");





});