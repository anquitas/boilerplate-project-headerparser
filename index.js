// ## IMPORTS --- --- ---

// -- server related
require('dotenv').config(); // to aaccess enviroment variables
var express = require('express');
var cors = require('cors'); // CORS to be remotely testable by FCC

// -- custom functions, testing
// const fccWhoAmI = require('./functions/fccWhoAmI') // fields expected by fcc

// -- microservice related custom functions
const simpleResponse = require('./modules/infoExtractor')



// ## INITS --- --- ---
var app = express()



// ## MW MOUNTS --- --- ---
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
app.use(express.static('public')); // http://expressjs.com/en/starter/static-files.html



// ## ENDPOINTS --- --- ---
// get: '/'
// get: '/api/hello'
// get: '/api/whoami'




// ## GET: '/' -- to serve a webpage at root endopoint
app.get( // http://expressjs.com/en/starter/basic-routing.html
  '/', 
  function (req, res) { 
    res.sendFile(__dirname + '/views/index.html');
  }
);



// ## GET: '/api/hello' -- greeting API given by freeCodeCamp
app.get( // your first API endpoint...
  '/api/hello', 
  function (req, res) {
    res.json({ greeting: 'hello API' });
  }
);



// ## GET: '/api/whoami' -- end point requested by freeCodeCamp testing
app.get(
  '/api/whoami',
  (req, res) => {
    const result = simpleResponse(
      req, 
      ["ipaddress", "language", "software", "isSecure", "isMobile"]
    )
    res.json(result)
  }
)



// ## EXECUTION --- --- ---
var listener = app.listen( // listen for requests :)
  process.env.PORT || 3000, 
  function () {
    console.log('Your app is listening on port ' + listener.address().port);
  }
);
