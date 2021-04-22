const marked = require("marked");
const fs = require('fs');

const arrOfLinks = (path) => {
    const file = fs.readFileSync(path, 'utf8')
      let fileContent = file;
      //console.log(fileContent)
      
       let links = [];
       //console.log(links);
  
       const renderer = new marked.Renderer(); //An object containing functions to render tokens to HTML.
       renderer.link = (href, title, text) => {
        // console.log("href", href)
        // console.log("texto", text)
        // console.log(links)
         if(href.charAt(0) !== '#'){
            links = [].concat(...links, {href, title, text})
         }
       }
       
       marked.use({ renderer });
      
      marked(fileContent);
       
      //console.log(links);
      return links;
    }
    
//arrOfLinks("./README.md");

module.exports = arrOfLinks;