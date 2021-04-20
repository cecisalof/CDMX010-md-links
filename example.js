const process = require('process');
const arrOfLinks = require('./links.js');
const linkValidation = require('./validation.js')
//console.log(process.argv)

let myArgs = process.argv.slice(2); // to get rid off the first two arguments of the argument values array
//Elements 0 and 1 are not "arguments" from the script's point of view, but they are for the shell that invoked the script.
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
case '--validate':
    linkValidation(arrOfLinks);
    console.log(myArgs[0], 'link validation');
    break;
case '--stats':
    console.log(myArgs[0], 'is really cool.');
    break;
case '--stats -- validate':
    console.log(myArgs[0, 1], 'the are both super coll.');
    break;
default:
    console.log('Sorry, that is not something I know how to do.');
}
