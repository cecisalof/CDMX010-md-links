const fs = require('fs');
//const { get } = require('http');
const marked = require("marked");
const path = require('path');
const klawSync = require('klaw-sync');
const arrOfLinks = require('./links.js');
const chalk = require('chalk');
const { Console } = require('console');


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
    //console.log(filesInDir);
    filesInDir.forEach((file) => {
      const filePath = file.path; // Getting just the path property of the arrOfFiles 
      const fileExtension = getFileExtension(filePath); // Getting the file´s extension

      let mdFiles = [];

        if(fileExtension === '.md'){
          mdFiles.push(filePath);

          console.log(chalk.hex('#cbaacb')('.md files in the path:'), chalk.hex('#6c88c4')(mdFiles));
          //console.log("List of .md files:" + chalk.pink + filePath);
          // const linksInAFile = arrOfLinks(mdFiles);
          //console.log(linksInAFile);
          // console.log(chalk.hex('ffffb5')("Links in the .md file:") , linksInAFile);
            
            //console.log(mdFiles)
            return mdFiles;
        };
    
    // console.log(filesInDir);
    // return filesInDir;
  })
}
 mdFilesInDir('./sampleFiles');


function mdLinks(path, options) {
  const listOfMdFiles = mdFilesInDir(path);
  console.log(chalk.hex('#cbaacb')('.md files in the path:'), chalk.hex('#6c88c4')(listOfMdFiles));
  //console.log("List of FILES", mdFilesInDir("./sampleFiles"))
  
  // const linksInAFile = arrOfLinks(listOfMdFiles);
  // console.log(linksInAFile);
  //console.log(chalk.hex('ffffb5')("Links in the .md file:") , linksInAFile);
  //   listOfMdFiles.forEach((file) => {
  //     const filePath = file.path; 
  //     //console.log(filePath)// Getting just the path property of the arrOfFiles 
  //     const fileExtension = getFileExtension(filePath); // Getting the file´s extension
    
  //     let mdFiles = [];

  //     if(fileExtension === '.md'){
  //       mdFiles.push(filePath);
  //       //console.log(mdFiles);

  //       console.log(chalk.hex('#cbaacb')('List of .md files:'), chalk.hex('#6c88c4')(mdFiles));
  //       //console.log("List of .md files:" + chalk.pink + filePath);
  //       const linksInAFile = arrOfLinks(mdFiles);
  //       //console.log(linksInAFile);
  //       console.log(chalk.hex('ffffb5')("Links in the .md file:") , linksInAFile);
  //   } 
  // });
    
}
//mdLinks('./sampleFiles');
