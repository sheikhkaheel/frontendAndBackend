import express from 'express';
const app = express()
const port = 3000;
app.listen(port, ()=>{
    console.log(`Listing on port ${port}`);
})

app.get('/', (req, res) => {
    res.send("<h1>Its Root</h1>")
})

app.get('/:username/:id', (req, res) => {
    let {username} = req.params
    res.send(`<h1>Welcome to the page of @${username}</h1>`)
    console.log(req.params);
})

app.get('/search',(req,res) => {
    let { q } = req.query;
    res.send(`<h1> ${q} </h1>`);
    console.log(q);
})    