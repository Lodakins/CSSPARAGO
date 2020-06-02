const express = require('express');
const path = require('path');
const open = require('open');
const authroutes = require("./routes/auth")

let app  = express();


app.use(express.static("public"));
const port =4050;
app.use(authroutes);


app.listen(port,function(res){
    console.log("Listening on port "+ port);
    // open("http://localhost:"+port);
})


