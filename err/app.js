var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send("Hey you ");
})
app.listen(3000, function(){
    console.log("kooooooooooooore")
})