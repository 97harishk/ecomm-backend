const express = require('express')
const app = express()
const port = 8000
const bodyParser = require('body-parser');
const cors = require('cors');

const jwt = require('./config/passport-jwt-strategy')
app.use(bodyParser.json());
app.use(cors());
const db = require('./config/mongoose')
app.use(express.urlencoded());
app.use('/', require('./routes'))
app.use('/uploads',express.static(__dirname + '/uploads'));
app.listen(port, function(err){
    if(err){
        console.log('could not run');
    }
    else{
        console.log('yup! express server is running on port', port);
    }
})