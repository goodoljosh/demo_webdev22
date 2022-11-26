var express = require('express');
var app = express();
var axios = require('axios');
app.use('/static', express.static("public"));

//Random number generator variable
//3896198, number for Gurdians of the Galaxy
let randomNum=Math.floor(1000000 + Math.random() * 9000000);
app.get('/', function(req, res){
    axios.get('http://www.omdbapi.com/?i=tt'+randomNum+'&apikey=d1d7d2ee').then(function(response){
        res.render('apihtml.ejs', { data: response.data });
    })
})
//console.log(Math.floor(1000000 + Math.random() * 9000000));
app.listen(3000,function(){
    console.log('App listening on port 3000');
})
