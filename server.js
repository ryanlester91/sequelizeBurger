//Dependencies
//------------------------------
let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
let app = express();

// Requiring our models for syncing
let db = require("./models");

//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Static directory
app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));


let exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars')

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

let port = process.env.PORT || 4000;

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });
});