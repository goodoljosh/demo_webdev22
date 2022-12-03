var express = require('express');
var app = express();
var axios = require('axios');
app.use('/static', express.static("public"));

function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

//3896198, number for Guardians of the Galaxy
app.get('/', function(req, res){
    axios.get('http://www.omdbapi.com/?i=tt'+randomNumber(1000000,3000000)+'&apikey=d1d7d2ee').then(function(response){
        res.render('apihtml.ejs', { data: response.data });
    })
})


app.listen(3000,function(){
    console.log('App listening on port 3000');
})
