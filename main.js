const fs = require("fs");
const { parse } = require("path");
const PATH = "C:\\Users\\Alexi\\Desktop"

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '\\' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            /* Recurse into a subdirectory */
            //console.log(dir)
            results = results.concat(walk(file));
        } else { 
            /* Is a file */
            results.push(file+"\n");
        }
    });
    fs.writeFile("results.txt", results.toString(), 'utf-8', (err) => {
        if(err) throw err;
    })
}

walk(PATH);
console.log("Saved")