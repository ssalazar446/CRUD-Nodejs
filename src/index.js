const express = require('express');
const morgan = require('morgan')

//initializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000)

//Middlewares
