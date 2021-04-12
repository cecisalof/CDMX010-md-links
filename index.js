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
    console.log(extName);
    return extName;
}
// getFileExtension('./test.md');


//----------ACCESS TO DIRECTORIES & SUBDIRECTORIES-------
  function listOfFiles(path)  {

    const readDir = fs.readdirSync(path);
    console.log(readDir);
    return readDir;

  };
  //listOfFiles('./sampleFiles');

// //-----MARKED LIBRARY ------
  render_unlink = function (paths) {
     let render = new marked.Renderer();
     render.link = function (href, title, text) {
        // render link text in a way that is appropriate
        // for a medium that is not a computer connected
        // to the Internet
        return text + ' ( link to: ' + href + ' )';
     };
     return render;
 };
 

    // fileContent = readFiles('./README.md'); 
    // // console.log(marked(fileContent));
    // console.log (marked(fileContent, {
    //         renderer: render_unlink()
    //     }));


//------------EXERCISE OF RECURSIVNESS WITH klawSync-------
function accesToSubdir(path) {
    // let paths;
    // try {
    // paths = klawSync('./sampleFiles') //Return an array of objetcs with all the files that exist inside ./sampleFiles directory. 
    // } catch (er) {
    // console.error(er)
    // }
    // console.dir(paths)

    const paths = klawSync(path.toString()) //Return an array of objetcs with all the files that exist inside ./sampleFiles directory. 
    //console.log(paths);
    return paths
};
//accesToSubdir('./sampleFiles');

function filter_path(file) {
    return file.path == "/Users/cecilia/Desktop/LABORATORIA/CDMX010-md-links/";
}


function mdLinks (paths, dir){
    const ArrofFiles = accesToSubdir('./sampleFiles');
    // console.log(ArrOfFiles);
    ArrofFiles.forEach(files => {
        const filesPath = ArrofFiles.filter(filter_path);
        console.log(filesPath);
        // const extName = getFileExtension(path);
        // console.log(extName);
    });
    // const extName = getFileExtension(path);
    // const fileContent = readFiles('./README.md'); 
    //const files = listOfFiles(path);
    // console.log(extName);
    // if( extName === '.md' ){
        
    //     return;
    // }
    // console.log()
}
mdLinks('./sampleFiles');