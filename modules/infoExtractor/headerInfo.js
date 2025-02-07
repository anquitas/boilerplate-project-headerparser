// META: to extract a specific field from the header and return it as key:value pair



// ## direct header field extraction
const ipaddress = (req) => ({ipaddress: req.headers['x-forwarded-for']})
const language = (req) => ({language: req.headers['accept-language']})
const software = (req) => ({software: req.headers["user-agent"]})



// ## information 
const isSecure = (req) => ({secure: req.secure || req.headers["x-forwarded-proto"] === "https"})
const isMobile = (req) => ({mobile: /mobile/i.test(req.headers["user-agent"])})



// ## EXPORTS --- --- ---
module.exports = {
  ipaddress, language, software, isSecure, isMobile
}