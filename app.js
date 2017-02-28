const express = require('express');
const app = express();
const path = require('path');
const handlebars = require('handlebars');
const hbs = require('hbs');
const bodyparser = require('body-parser');




//configure view engine and views
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));



//middleware

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyparser());
























// routing



app.get('/', (req, res) =>{

    res.render('index',{
        title: "Welcome to LangLearn"
    });
});




app.listen(3000, () => {   
   console.log("Listening on port 3000...") 
});