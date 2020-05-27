const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const routes = require("./controllers/routes.js");

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
app.use(routes);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
  // Log (server-side) when our server has started
     console.log("Server listening on: http://localhost:" + PORT);
    });
});
