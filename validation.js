
const fetch = require('node-fetch');
// const arrOfLinks = require('./links.js')


//------ WITH MORE COMPLEXITY--------
const linkValidation = (arrOfLinks) => {
  return new Promise ((resolve, reject) => {
      let linksInfo = arrOfLinks.map((link) => {
          return fetch(link.href)
              .then(result => {
                  link.status = result.status;
                  link.flag = (result.status == 200) ? 'ok' : 'fail'; 
              
              })
              .catch((error) => console.log(error));
      });
   Promise.all(linksInfo)
      .then(() => resolve (arrOfLinks))
      .catch(() => {
          reject(new Error('No se obtuvo la información de los links solicitados'));
      });
  });
};


module.exports = linkValidation;