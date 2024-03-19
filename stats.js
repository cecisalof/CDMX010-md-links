const linkValidation = require("./validation")
const validation = require("./validation")
const links = require("./links.js");
const arrOfLinks = require("./links.js");

let uniqueLinks = [];
let totalLinks = [];
let brokenLinks = [];
let activeLinks = [];


const stadistics = (path) => {
    const links = arrOfLinks(path);
    
    links.forEach((link) => {
        const linksHref = link.href;
        //console.log(linksHref)
        totalLinks.push(linksHref);

        if(link.status === 200 || 'ok') {
            activeLinks.push(link.href);
            return uniqueLinks;
        } else if (link.status === 404 || 'fail') {
            brokenLinks.push(link.href);
            return brokenLinks;
        }
    });

    console.log("Total: ", totalLinks.length)
    uniqueLinks = [...new Set(totalLinks)];
    console.log("Unique:", uniqueLinks);
    console.log("Broken:", brokenLinks.length);
    console.log("Active:", activeLinks.length);
    // console.log("Unknown", unknowStatus.length )
  
}
stadistics("./README.md");

module.export = stadistics;