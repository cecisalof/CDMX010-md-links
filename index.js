const fs = require('fs');
//const { get } = require('http');
const marked = require("marked");
const path = require('path');
const klawSync = require('klaw-sync');
const arrOfLinks = require('./links.js');
const chalk = require('chalk');


// ------------- READING FILES SYNCHONOUSLY-------------------
const readFiles = (path) => {
    const fileContent = fs.readFileSync(path, 'utf8')
    //console.log(fileContent);
    return fileContent;
};
// //readFiles('./README.md');

//-------------READING FILES ASYNCHRONOUSLY -- fs.readFile takes the file path and the callback
// const readingFiles = (path) => {
// 	const fileContent = fs.readFile(path, 'utf8', (err, data) => {
// 			if (err) {
// 				console.error(err)
// 				return
// 			}
//       // Print the string representation of the data
//       //console.log(data.toString());
//       return (data) //data contains the full content of the file
      
// 		})

//     }
   
    //readingFiles("./README.md")

// ------------- GET FILES EXTENSION-------------
const getFileExtension = (URL) => {
    //Return the extension:
    const extName = path.extname(URL);
    //console.log(extName);
    return extName;
}
// getFileExtension('./test.md');


//----------ACCESS TO DIRECTORIES & SUBDIRECTORIES-------
  const listOfFiles = (path) =>  {

    const readDir = fs.readdirSync(path);
    console.log(readDir);
    return readDir;

  };
  //listOfFiles('./sampleFiles');


//------------EXERCISE OF RECURSIVNESS WITH klawSync-------
const mdFilesInDir = (path) => {
    const filesInDir = klawSync(path) //Return an array of objetcs with all the files that exist inside ./sampleFiles directory. 
    //console.log(paths);
    filesInDir.forEach((file) => {
      const filePath = file.path; // Getting just the path property of the arrOfFiles 
      // console.log(filePath);
      const fileExtension = getFileExtension(filePath); // Getting the file´s extension
      // console.log(fileExtension);
      const mdFiles = filesInDir.filter((extension) => {
        if(fileExtension === '.md') 
        console.log(filesInDir);
        
      })
        return mdFiles;
    });
    // console.log(filesInDir);
    return filesInDir;
};
//accesToSubdir('./sampleFiles');


function mdLinks(path, options) {
  const arrOfFiles = mdFilesInDir('./sampleFiles');
    // arrOfFiles.forEach((file) => {
    //   const filePath = file.path; // Getting just the path property of the arrOfFiles 
    //   const fileExtension = getFileExtension(filePath); // Getting the file´s extension
    
      // let mdFiles = [];

      // if(fileExtension === '.md'){
      //   mdFiles.push(file.path);
      //  // console.log(chalk.hex('#cbaacb')('List of .md files:'), chalk.hex('#6c88c4')(mdFiles.toString()));
      //   //console.log("List of .md files:" + chalk.pink + filePath);
      //   const linksInAFile = arrOfLinks(filePath);
      //   //console.log(chalk.hex('ffffb5')("Links in the .md file:") , linksInAFile);

    // }
  // });
    
}
mdLinks();