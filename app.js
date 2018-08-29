var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');


var routesAPI = require('./routes/route.js');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));






port = process.env.PORT || 8080;


app.get('/', routesAPI.home);

app.post('/getName', routesAPI.getName);
app.get('/goToHome', routesAPI.goHome);
app.get('/gotoCompVsComp', routesAPI.gotoCompVsComp);


app.listen(port, function(){
    console.log('server is up and running on port ' + port);
});