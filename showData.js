#!/usr/bin/env node

const process = require('process');
const arrOfLinks = require('./links.js');
const linkValidation = require('./validation.js')
//console.log(process.argv)

const cli = (path) => {
    let myArgs = process.argv.slice(2); // to get rid off the first two arguments of the argument values array
    //Elements 0 and 1 are not "arguments" from the script's point of view, but they are for the shell that invoked the script.
    console.log('myArgs: ', myArgs);
    const links = arrOfLinks(path)
    
    return new Promise ((resolve, reject) => {

        if (myArgs[0] === '--validate' || '--v') { 
            let validatedLinks = linkValidation(links)
            .then((result) => {
                console.log("validation", result)
            })   
            // console.log(validatedLinks);
            // return (linkValidation(links))
        }
    //     } else {
    //         console.log(links)
    //         return links
    //    }
    
    })

    // switch (myArgs[0]) {
    // case '--validate':
    //     linkValidation(arrOfLinks);
    //     console.log(myArgs[0], 'links validation');
    //     break;
    // case '--stats':
    //     console.log(myArgs[0], 'links stadistics');
    //     break;
    // case '--stats -- validate':
    //     console.log(myArgs[0, 1], 'both validation & stadistics');
    //     break;
    // default:
    //     console.log('Sorry, that is not something I know how to do.');
//}

}

cli("README.md");

// if (process.argv[3] === '--validate'){    
//     return Promise.all(links.map(validate))
//      .catch(() => 'error')
//  } else{
//      return links
//  }