const express = require('express');
const app = express();
const PORT = 8000;
//  Add a logger middleware that logs the `req.query` to the console for ALL requests

// app.use(queryLogger)
app.use(express.static('public'))

function queryLogger(req, res, next) {
    console.log(req.query);
    next();
}

app.get('/cats', (req, res)=>{
    res.send('cats');
});

app.get('/',queryLogger, (req, res)=>{
    res.send('slash');
});






app.listen(PORT, ()=>console.log(`listening on port http://localhost:${PORT}`));