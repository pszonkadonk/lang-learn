const express = require('express');
const app = express();
const path = require('path');

const configRoutes = require("./routes");

const exphbs = require('express-handlebars');
const Handlebars = require('handlebars');
const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

            return new Handlebars.SafeString(JSON.stringify(obj));
        },
        firstUpper: (str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
});



//configure view
app.set('views', path.join(__dirname, 'views'));

//middleware
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/bower_components'));

//templating
app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

//routing
configRoutes(app);

//start server
app.listen(3000, () => {
   console.log("Listening on port 3000...")
});
