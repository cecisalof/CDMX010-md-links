const marked = require("marked");
const fs = require('fs');

const ArrOfLinks = (files) => {

    const file = fs.promises.readFile('./README.md', 'utf8')
    //console.log(fileContent)
    .then((data) => {
      let fileContent = data;
      
       let links = [];
       //console.log(links);
  
       const renderer = new marked.Renderer();
       renderer.link = (href, title, text) => {
        links = [].concat(...links, {href, title, text})
        
  
       }
       
       marked.use({ renderer });
      
      marked(fileContent);
       
      console.log(links);
      return links;
       
      }).catch((err) => console.log(err))

      return file;
    }
    
ArrOfLinks();