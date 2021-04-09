const fs = require('fs');
const { get } = require('http');
const marked = require("marked");
const path = require('path');
const klawSync = require('klaw-sync')


// ------------- READING FILES -------------------
function readFiles(path){
    const fileContent = fs.readFileSync(path, 'utf8')
    //console.log(fileContent);
    return fileContent;
};
//readFiles('./README.md');

// ------------- GET FILES EXTENSION-------------
function getFileExtension(URL){
    //Return the extension:
    const extName = path.extname(URL);
    //console.log(extName);
    return extName;
}
// getFileExtension('./test.md');


//----------ACCESS TO DIRECTORIES & SUBDIRECTORIES-------
  const listOfFiles = (path) => {
    const readDir = fs.readdirSync(path);
    console.log(readDir);
    return readDir;
  };
  //listOfFiles('./sampleFiles');

// //-----MARKED LIBRARY ------
//   render_unlink = function () {
//      let render = new marked.Renderer();
//      render.link = function (href, title, text) {
//         // render link text in a way that is appropriate
//         // for a medium that is not a computer connected
//         // to the Internet
//         return text + ' ( link to: ' + href + ' )';
//      };
//      return render;
//  },
 

//     fileContent = readFiles('./README.md'); 
//     // console.log(marked(fileContent));
//     console.log(marked(fileContent, {
//             renderer: render_unlink()
//         }));



//------------EXERCISE OF RECURSIVNESS WITH KLAWNSYNC-------
// let paths
// try {
//   paths = klawSync('./sampleFiles')
// } catch (er) {
//   console.error(er)
// }
// console.dir(paths)

//-----SIMPLE CODE-------
// const paths = klawSync('./sampleFiles')
// console.log(paths);

// --------------¿IS IT A .md FILE?------------------
// function getLinksInFiles(data){
//      const regexp = /\(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}\gi/gm;
//     // /* Match only links that are fully qualified with https */
//     //const fullLinkOnlyRegex = /^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/
//     // /* Match full links and relative paths */
//     //const regEx = /^\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+)\)$/
//     const myMatch = data.replace(/[{()}]/g, ' ').match(regexp)
//     console.log(myMatch)
//     return myMatch;
//     /* ["[View the analytics docs](https://getanalytics.io/)", "View the analytics docs", "https://getanalytics.io/", index: 0, input: "[View the analytics docs](https://getanalytics.io/)", groups: undefined] */

//     // // de-structure the array
//     // const [ full, text, url ] = myMatch

//     // console.log(text)
//     // // 'View the analytics docs'

//     // console.log(url)
//     // // 'https://getanalytics.io/'
//   }
//   getLinksInFiles('./README.md');
// //  console.log('PRINTING FILE CONTENT FROM', readFiles('./README.md'))
// // // // console.log('PRINTING FILE EXTENSION FROM', getFileExtension('./test.md'))
// //  console.log('GETING LINKS IN A FILE', getLinksInFiles('./README.md'))

