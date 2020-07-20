const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
    console.log('the path is : ',__dirname);
    return res.render('home', {title: "My contacts list"});
})


app.get('/practice', function(req,res) {
    return res.render('practice', {
        title : "Let us play with ejs"
    })
})


app.listen(port, function(err) {
    if(err) {
        console.log('error in running the server',err);
    }

    console.log('yup, my express server is running on port :', port);
});