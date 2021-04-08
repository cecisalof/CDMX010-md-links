 const fs = require('fs');
const { get } = require('http');
// const marked = require("marked");
const path = require('path');

// ------------- READING FILES -------------------
// function readFiles (path){
//     // const samplePath = './sampleFiles';
//     fs.readFile('./sampleFiles/test.md', 'utf8', (err, data) => {
//         if (err){
//             console.log(err)
//             return
//         } 
//         console.log(data);
//     })

//  };
// readFiles();

// ------------- GET FILES EXTENSION-------------
function getFileExtension (URL){
const sampleURL = './test.txt'
//Return the extension:
const extName = path.extname(sampleURL);
console.log(extName);
return extName;
}
getFileExtension();


