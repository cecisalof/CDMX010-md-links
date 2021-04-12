/* Desde este archivo debes exportar una función (mdLinks).*/
//  module.exports = () => {

	const fs = require('fs')
	// const chalk = require('chalk')

	// READING FILES ASYNCHRONOUSLY -- fs.readFile takes the file path and the callback
	// //  const readingFiles = () => {
	// 	fs.readFile('./sampleFiles/test.md', 'utf8', (err, data) => {
	// 		if (err) {
	// 			console.error(err)
	// 			return
	// 		}
	// 	  // Print the string representation of the data
	// 	  console.log(data) //data contains the full content of the file
	// 	})

	// // }

	//  // READING FILES SYNCHRONOUSLY 

	// try {
	// 	let data = fs.readFileSync('./sampleFiles/test.md', 'utf8');
	// 	console.log(data);    
	// } catch(e) {
	// 	console.log('Error:', e.stack);
	// };



// /* -------TO LIST THE FILES AND DIRECTORIES WITHIN A PATH ------ */

//   const listOfFiles = () => {
	// fs.readdir('./', (err, files) => {
	// 	if (err) {
	// 		console.error(err)
	//    //	return
	// 	}
	// 	console.log('files: ', files)
	// })
// } 

// // withFileType option to true to give us more information about each entry:

//  fs.readdir('./sampleFiles', { withFileTypes: true }, (err, files) => {
//   	if (err) {
//   		console.error(err)
//   		return
//  	}

//   	console.log('files: ')
//   	files.forEach(file => {
//   		// the `isDirectory` method returns true if the entry is a directory
//   		const type = file.isDirectory() ? '📂' : '📄'
//  		console.log(type, file.name)
//   	})
//   })

// // Acces to the subdirectories 

// // const openSubdirectories = () => {
// 		fs.opendir('./', (err, dir) => {

// 		if (err) {
// 			// log and return if theres any error
// 			console.error(err)
// 			//return
// 		}

// 		const readNext = (dir) => {
// 	// // 		// The `read` method gives us information on the
// 	// // 		// next file in the directory. If there are no
// 	// // 		// more files left, the value of `file` is null
// 			dir.read((err, file) => {
// 				if (err) {
// 					// log and return error
// 					console.error(err)
// 					return
// 				}

// 				// If file is null, we are done. 
// 				if (file === null) {
// 					console.log("No file left!");
// 					return
// 				}

// 				let dir;
// 	// // // 			// If the file exists, log the name, along with
// 	// // // 			// the icon for its type
// 				const type = file.isDirectory() ? '📂' : '📄'
// 				console.log(type, file.name)
// 				if (file.isDirectory() === true){
// 					file.push
// 				}
// 	// // // 			// Recursively call `readNext` for the next directory entry
// 				//readNext(dir)
// 				dir.forEach(file => readNext(dir));
// 	 		})
// 		}

// 	// // // 	// Call the `readNext` function with the first directory entry
// 			readNext(dir)
// 	})
// // };


// // };


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


//-------FILTERING PATH FROM ArrofFiles
// const filter_path = (file) => {
//     return file.path == "/Users/cecilia/Desktop/LABORATORIA/CDMX010-md-links/";
// }