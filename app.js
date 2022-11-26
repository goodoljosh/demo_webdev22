var express = require('express');
var app = express();
var axios = require('axios');
app.use('/static', express.static("public"));
//Genrates a random number based on a minimum and maximum number defined here.
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
} 

//Random number generator variable
//3896198, number for Guardians of the Galaxy
app.get('/', function(req, res){
    //let randomNum=Math.floor(8000000 + Math.random() * 9000000);
    //API call using commented random number generator above
    //axios.get('http://www.omdbapi.com/?i=tt'+randomNum+'&apikey=d1d7d2ee').then(function(response){
    axios.get('http://www.omdbapi.com/?i=tt'+randomNumber(1000000,3000000)+'&apikey=d1d7d2ee').then(function(response){
        res.render('apihtml.ejs', { data: response.data });
    })
})

//console.log(randomNumber(3896198,4000000));
//Used for testing for random numbers
app.listen(3000,function(){
    console.log('App listening on port 3000');
})
