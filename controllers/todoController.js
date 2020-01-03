var bodyParser = require('body-parser');

var data = [{item:'cleaning'},{item:'shopping'},{item:'coding'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/todo', function(req, res){
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res){
        data.push(req.body);
        console.log(data);
        // res.render('todo', {todos: data});
        res.json(data);
    });

    app.delete('/todo', function(req, res){
        
    });

};