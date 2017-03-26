const express = require('express');
const app = express();
const path = require('path');

//configure view
app.set('views', path.join(__dirname, 'views'));

//middleware

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'bower_components')));


app.get('/', (req, res) =>{
    res.render('index.html')

});

app.listen(3000, () => {   
   console.log("Listening on port 3000...") 
});
