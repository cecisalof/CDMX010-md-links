/* Desde este archivo debes exportar una función (mdLinks).*/
// module.exports = () => {
	
// };

const fs = require('fs')

	// // fs.readFile takes the file path and the callback
	// fs.readFile('README.md', (err, data) => {
	
	//   // if there's an error, log it and return
	// 	if (err) {
	// 		console.error(err)
	// 		return
	// 	}
	
	//   // Print the string representation of the data
	//   console.log(data.toString())
	// })


// /* -------TO LIST THE FILES AND DIRECTORIES WITHIN A PATH ------ */

//   fs.readdir('./sampleFiles', (err, files) => {
//   	if (err) {
//   		console.error(err)
//  	//	return
//   	}

//   	console.log('files: ', files)
//   })

// // While this gives us information about the names of the contents, it doesn’t tell us whether an entry is a file, or another directory. We can set the withFileType option to true to give us more information about each entry:


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

// // // Similar to file streams, this is useful when a directory has a large number of files, 
// // // or when you want to go through the files in a directory, and its subdirectories recursively.

// // // The async `opendir` method creates a stream from the directory
// // // passed as its first argument. The stream is present in the callback
//   fs.opendir('./', (err, dir) => {

//   	if (err) {
//   		// log and return if theres any error
//   		console.error(err)
//   		return
//   	}

// // 	// A scoped function is defined that reads the next
// // 	// file in the directory and calls itself recursively
 	const readNext = (dir) => {
// // 		// The `read` method gives us information on the
// // 		// next file in the directory. If there are no
// // 		// more files left, the value of `file` is null
 		dir.read((err, file) => {
 			if (err) {
 				// log and return error
 				console.error(err)
 				return
 			}

 			// If file is null, we are done. 
 			if (file === null) {
 				return
 			}

// // 			// If the file exists, log the name, along with
// // 			// the icon for its type
 			const type = file.isDirectory() ? '📂' : '📄'
 			console.log(type, file.name)
// // 			// Recursively call `readNext` for the next directory entry
 			readNext(dir)
 		})
 	}

// // 	// Call the `readNext` function with the first directory entry
// // 	readNext(dir)
// // })