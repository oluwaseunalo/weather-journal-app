// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

// Start up an instance of app

import express, { static } from 'express';
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const 
import { urlencoded, json } from 'body-parser';
app.use(urlencoded({ extended: false }));
app.use(json());

// Cors for cross origin allowance
import cors from 'cors';
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 8000;
const server = app.listen(port,listening);

function listening (){
    console.log('server is running');
    console.log(`running on the localhost:$(port)`)
}
