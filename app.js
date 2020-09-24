const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 5000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    // res.send("OMG it's working!");
    res.sendFile('index.html');
});

const pdfRoute = require('./routes/pdfmake')
app.use('/pdfMake', pdfRoute);

const testPage = require('./routes/testpage')
app.use('/pdfMake', testPage);

app.listen(port, () => {
    console.log('Server started on port 5000');
})