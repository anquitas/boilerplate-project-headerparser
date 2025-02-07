// META: to parse, extract and buuild the fcc required object to serve on the api endpoint


// ## IMPORTS --- --- ---
const {ipaddress, language, software} = require('./headerInfo')



// ## FUNCTIONS --- --- ---
const fccWhoAmI = req => {
  return { ...ipaddress(req), ...language(req), ...software(req)}
}



// ## EXPORTS --- --- ---
module.exports = fccWhoAmI