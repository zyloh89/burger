// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: function() {
    return orm.all("burgers");
  },
  // The constiables cols and vals are arrays.
  insertNew: function(cols, vals) {
    return orm.create("burgers", cols, vals);
  },
  update: function(objColVals, condition) {
    return orm.update("burgers", objColVals, condition);
  },
  delete: function(condition) {
    return orm.delete("burgers", condition)
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
