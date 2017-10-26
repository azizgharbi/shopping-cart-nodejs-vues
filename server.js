var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

app = express();

//============================================
        /* Let's the game begin */
//============================================

// assets in the public folder
app.use('/static', express.static('public'));
//body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
// set engine handlebars
app.engine('handlebars', exphbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');
//controller
require('./Controller/ShopController');
//server connecting
var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Hi ! the server is running on port "+ port);
})