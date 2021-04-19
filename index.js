const fs = require('fs');
//const { get } = require('http');
const marked = require("marked");
const path = require('path');
const klawSync = require('klaw-sync');
const arrOfLinks = require('./links.js');
const chalk = require('chalk');
const { Console } = require('console');
const validateLinks = require('./validation.js');



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
    let mdFiles = [];
    
    filesInDir.forEach((file) => {
      const filePath = file.path; // Getting just the path property of the arrOfFiles 
      //console.log(filePath);
      const fileExtension = getFileExtension(filePath); // Getting the file´s extension
      //console.log(fileExtension)
        if(fileExtension === '.md'){
          mdFiles.push(filePath);
          

        //console.log(chalk.hex('#cbaacb')('List of .md files:'), chalk.hex('#6c88c4')(mdFiles));
        // //console.log("List of .md files:" + chalk.pink + filePath);
        // const linksInAFile = arrOfLinks(mdFiles);
        // //console.log(linksInAFile);
        // console.log(chalk.hex('ffffb5')("Links in the .md file:") , linksInAFile);
        //   // const mdFiles = filesInDir.filter((extension) => {
        //   //   if(fileExtension === '.md') 
        //   //   console.log(filesInDir);
            
        //   // })
        //     //console.log(mdFiles)
        //     return mdFiles;
       };
   
    // });
    // return filesInDir;
  })
  //console.log(mdFiles);
    return mdFiles;
}

//mdFilesInDir('./sampleFiles');


function mdLinks(path, options) {
  const listOfMdFiles = mdFilesInDir(path);
  listOfMdFiles.forEach((file) => {
  //console.log ("línea 98", listOfMdFiles)
  console.log(chalk.hex('#cbaacb')('List of .md files:\n'), chalk.hex('#6c88c4')("\n", listOfMdFiles, "\n"));
  // // //console.log("List of .md files:" + chalk.pink + filePath);
  const linksInAFile = arrOfLinks(listOfMdFiles);
  console.log(linksInAFile);
  // console.log(chalk.hex('ffffb5')("Links in the .md file:") , linksInAFile);
    })
  }
    // let validation = validateLinks(linksInAFile);


    

mdLinks('./sampleFiles');
