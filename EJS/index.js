const express = require('express');
const app = express();
const path = require('path');

const port = 8080;

app.set('view engine', 'ejs');
app.set('view' , path.join(__dirname, '/views'));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});

app.get('/',(req,res)=>{
    res.render('home.ejs');
})