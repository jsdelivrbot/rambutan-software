var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {

    // if (!!request.params.id) {
    //     var id = request.params.id;
    //     // do something with id
    //     // send a response to user based on id
    //     var obj = {id : id, Content : "content " + id};
    //
    //     response.writeHead(200, {"Content-Type" : "application/json"});
    //     response.write(JSON.stringify(obj));
    // }

    response.render('pages/index');

});


app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


