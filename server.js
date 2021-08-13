// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Configuring the latest express version with body-parser in the default.
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8080;
const server = app.listen(port,listening);

function listening (){
    console.log('server is running');
    console.log(`running on the localhost:$(port)`);
}

//Setting up the GET & POST request

app.get('/retrieveData', sendData);
function sendData (req, res) {
    res.send(projectData);
}
app.post('/includeData', entryHolder);
function entryHolder (req, res){
    console.log(req.body)
   let newUpdate = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }
    projectData=newUpdate;
    res.send(projectData)
}

