const fs = require('fs');
const { get } = require('http');
const marked = require("marked");
const path = require('path');
const klawSync = require('klaw-sync')


// ------------- READING FILES -------------------
// const readFiles = (path) => {
//     const fileContent = fs.readFileSync(path, 'utf8')
//     //console.log(fileContent);
//     return fileContent;
// };
// //readFiles('./README.md');

//-------------READING FILES ASYNCHRONOUSLY -- fs.readFile takes the file path and the callback
const readingFiles = (path) => {
	const fileContent = fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				console.error(err)
				return
			}
		  // Print the string representation of the data
		  return (data) //data contains the full content of the file
		})

    }
    // readingFiles()

// ------------- GET FILES EXTENSION-------------
const getFileExtension = (URL) => {
    //Return the extension:
    const extName = path.extname(URL);
    console.log(extName);
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

// //-----MARKED LIBRARY ------
//   render_link = const getPaths = (paths) => {
//      let render = new marked.Renderer();
//      render.link = function (href, title, text) {
//         // render link text in a way that is appropriate
//         // for a medium that is not a computer connected
//         // to the Internet
        
//         return text + ' ( link to: ' + href + ' )';
//      };
//      return render;
//  };
 
//     fileContent = readFiles('./README.md'); 
//     // console.log(marked(fileContent));
//     console.log (marked(fileContent, {
//             renderer: render_link()
//         }));


//------------EXERCISE OF RECURSIVNESS WITH klawSync-------
const accesToSubdir = (path) => {
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


const showLinks = (files) => {

    const linksOb = readingFiles("./README.md")
    console.log(linksOb)
    // .then((data) => {
    //   let document = data;

    //    let links = [];
  
    //    const renderer = new marked.Renderer();
    //    renderer.link = (href, title, text) => {
    //     links = [].concat(...links, {href, title, text})
  
    //    }
      
    //    marked.use({ renderer });
      
    //   marked(document);

    //    return links;
    //   }).catch((err) => console.log(err))

      return linksOb;
    }
    
showLinks();


//-------FILTERING PATH FROM ArrofFiles
// const filter_path = (file) => {
//     return file.path == "/Users/cecilia/Desktop/LABORATORIA/CDMX010-md-links/";
// }


const mdLinks = (paths, dir) => {
    //const ArrOfFiles = accesToSubdir('./sampleFiles');
    // readingFiles("./README.md");
    // console.log(ArrOfFiles);
    // ArrOfFiles.forEach(files => {
    //     const filesPath = ArrOfFiles.filter(filter_path);
    //     console.log(filesPath);
    //     // const extName = getFileExtension(path);
    //     // console.log(extName);
    // });
    // const extName = getFileExtension(path);
    // const fileContent = readFiles('./README.md'); 
    //const files = listOfFiles(path);
    // console.log(extName);
    // if( extName === '.md' ){
        
    //     return;
    // }
    // console.log()
}
mdLinks();