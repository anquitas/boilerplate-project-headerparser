this module is a simple module created for this project

the function simpleResponse is used to construct the object with the requested fields dynamically

it is given 
  - request object to parse its header
  - array of field names as strings to extract

field names are used to call appropriate functions to get desired info which extracts it as a key value pair and spread to the final parsed headers object

new functions can be created as needed on the `headerInfo` file for different headers and header names can be customly specified in the functions