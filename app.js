var express = require('express');
var app = express();
var axios = require('axios');
app.use('/static', express.static("public"));

app.get('/', function(req, res){
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=d1d7d2ee').then(function(response){
        Todo.find(function(err, todo){
            if(err){
                res.json({"Error: ": err})
            } else {
                res.render('todo.ejs', {todoList: todo, comicData: response.data});
            }
        })
    }).catch(function(error){
        res.json({"Error: ": error})
    })

})

app.listen(3000,function(){
    console.log('App listening on port 3000');
})