const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;