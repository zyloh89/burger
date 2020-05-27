// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    return orm.selectall("burgers", function (res) {
      cb(res)
    });
  },
  // The constiables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    return orm.insertOne(cols, vals);
  },
  updateOne: function(newValue, colValue, cb) {
    return orm.updateOne(newValue, colValue);
  },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
