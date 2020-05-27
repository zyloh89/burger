// Import MySQL connection.
const connection = require("../config/connection.js");


// Object for all our SQL statement functions.
const orm = {
  
//Render all burgers
    selectAll: function() {
        return new Promise ((resolve, reject) => {
            const queryString = "SELECT * FROM burgers";
            connection.query(queryString, 
            function (err, result) {
                if (err) return reject(err);
                return resolve(result)
            });
        })
    },
  
// Insert burger

    insertOne: function(table, cols, vals) {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO burgers (??) VALUES (??)";
            connection.query(queryString, [table, cols, vals], 
            function (err, result) {
                if (err) return reject (err);
                return resolve(result)
        });
    });
  },
  
  // Update burger
    updateOne: function(table, newValue, colValue) {
        return new Promise ((resolve, reject) => {
            const queryString = "UPDATE burgers SET ? WHERE id = ?";
            connection.query(queryString, [table, newValue, colValue], function (err, result) {
                if (err) return reject (err);
                return resolve(result)
            })
        })
    },
};

// Export the orm object for the model (cat.js).
module.exports = orm;
