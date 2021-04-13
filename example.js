const process = require('process')
//console.log(process.argv)

let myArgs = process.argv.slice(2); // to get rid off the first two arguments of the argument values array
//Elements 0 and 1 are not "arguments" from the script's point of view, but they are for the shell that invoked the script.
console.log('myArgs: ', myArgs);

switch (myArgs[0]) {
case 'insult':
    console.log(myArgs[1], 'smells quite badly.');
    break;
case 'compliment':
    console.log(myArgs[1], 'is really cool.');
    break;
default:
    console.log('Sorry, that is not something I know how to do.');
}
