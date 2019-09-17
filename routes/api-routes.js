var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {

    db.Burger
      .findAll({
      }).then(function(burgers) {
        res.render("index", {burger: burgers });
      });
});

//submit button creates burger
app.post("/burgers/create", function(req, res) {
  db.Burger
    .create({
      burger_name: req.body.burger_name,
  }).then(function() {
    res.redirect("/");
  });
});

app.post("/:id", function(req, res) {
  db.Burger
  .update({
    
      devoured: true,
    },
  {
    where: { id: req.params.id }
  }
  ).then(function(burgers) {
    // db.Burger
    //   .findAll({
    //   }).then(function(burgers) {
    //     res.render("index", {burger: burgers });
    //   });

    res.redirect("/");
  });
  })
  //let customerName = req.body.eater_id;

  /*db.Customer
    .findAll({
      where: { customer_name: customerName}
    }). then(function(data) {
        if(data.length > 0) {
          //if customer already exists in database
          console.log("customer already exists");
          devour(data[0].dataValues.id);
        } else {
          //if customer does not exist in database
          console.log("creating new customer");
          db.Customer
            .create({
              customer_name: req.body.eater_id
            }).then(function(data) {
              devour(data.dataValues.id);
            })
        });*/
      

  

          //mark burger as devoured and record the id of the customer
       

  }

