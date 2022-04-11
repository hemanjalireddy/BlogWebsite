const express = require("express");
/**const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const res = require("express/lib/response");**/
const https = require("https");

const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


app.get("/", function (req,res){
    res.send("server is up");

    
});



app.listen(3000,function(){
    console.log("Server started at port 3000");
});