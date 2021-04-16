
const fetch = require('node-fetch');


const validateLinks = (arrOfLinks) => {
  const validation = fetch(arrOfLinks.href)
  .then((res)=>{
  let status = {status: res.status, statusText: res.statusText,};
  let objWithStatus = Object.assign(arrOfLinks, status)
  return objWithStatus;
})
  .catch(() => {
    let status = {status: 'x', statusText: 'Este no es un link valido',};
    let brokenObj = Object.assign(arrOfLinks, status)
    return brokenObj;
  })

  return validation;
}

module.exports = validateLinks;