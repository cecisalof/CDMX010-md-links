
const fetch = require('node-fetch');
const arrOfLinks = require('./links.js')


// const validateLinks = (path) => {
//   const linksArr = arrOfLinks(path);
//   console.log(linksArr);
//   let allLinksInfo = linksArr.map((link) => {
//     //console.log(linksarray);
//     console.log(link.href);
//     //return fetch(link.href);
//   });
//   const validation = fetch({arrOfLinks: arrOfLinks.href})
//   .then((res) => {
//   let status = {status: res.status, statusText: res.statusText,};
//   console.log(status)
//   // let objWithStatus = Object.assign(arrOfLinks, status)
//   // return objWithStatus;
// })
//   .catch(() => {
//     let status = {status: 'x', statusText: 'Este no es un link valido',};
//     // let brokenObj = Object.assign(arrOfLinks, status)
//     // return brokenObj;
//   })

//   return validation;
// }
// validateLinks("./README.md")

//module.exports = validateLinks;


//-------- prueba dos--------
const linkValidation = (path) => {
  const linksArr = arrOfLinks(path);

      let inksInfo = linksArr.map((link) => {
         return fetch(link.href)
              .then(result => {  
                // let status = {status: result.status, statusText: result.statusText,};
                //   console.log(status)
                //   // let statusOnly = Object.assign(linksArr, status)
                //   // return statusOnly;
                link.status = {fileName: link.href, fileText: link.text, status: result.status, statusText: result.statusText,};
                  console.log(link.status)            
                })
              .catch((error) => console.log("No se puede obtener información de los links"));
      });
};

//linkValidation("./README.md")




//----------- pequeñas pruebas---------
// const linksarray = arrOfLinks("./README.md");

// let allLinksInfo = linksarray.map((link) => {
//   //console.log(linksarray);
//   console.log(link.href);
//   //return fetch(link.href);
// });