// META: this function abstracts all the work required to construct parsed header info



// ## IMPORTS --- --- ---
const headerInfo = require('./headerInfo'); // Import your functions



// ## CONSTANTS --- --- ---
// const request = { // for testing purposes
//     headers: { 
//       'x-forwarded-for': '192.168.1.1',
//       'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
//       'user-agent': 'Mozilla/5.0',
//       'x-forwarded-proto': 'http'
//     },
//     secure: false
//   }



// ## FUNCTIONS --- --- ---
const simpleResponse = (req, fields) => {
  return fields.reduce( // iterates over selected fields
    (accumulator, field) => { // 
      // at each iteration call the method for selected field using request object
      // it extracts and returns an object with the key, value pair from the header field in question
      Object.assign(accumulator, headerInfo[field](req)) // spread the key value pair to accumulator object
    return accumulator // return the accumulator for next iterations
    }, 
  {} // Start with an empty object
  ) // reduce ending 
}



// ## TEST --- --- ---

// const result = responseBuilder(
//   request, ["ipaddress", "language", "software", "isSecure", "isMobile"]);
// console.log(result);



// ## EXPORTS --- --- ---
module.exports = simpleResponse;




// ## INFO --- --- ---

/* // working of the reduce method
array**.reduce(callback, initialValue)

callback -> (acc, curVal) => updated acc
current value changes at each iteration, iterates over [array]
*/