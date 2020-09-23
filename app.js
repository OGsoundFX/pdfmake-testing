const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("OMG it's working!");
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
})