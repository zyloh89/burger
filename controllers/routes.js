const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// GET all burgers
router.get("/", function(req,res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

// POST new burger

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "name",
      "devoured"
    ], [
      req.body.name,
      req.body.devoured
    ])
    .then(result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });


  router.put("/api/burgers/:id", function(req, res) {
  
    const condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        res.status(404).end();
      }
      else {
        res.status(200).end();
      }
    });
  });

// Export routes for app.js to use.
module.exports = router;