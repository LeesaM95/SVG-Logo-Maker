// this file will ensure that whatever the user inputs will be written into a new file

const fs = require('fs');

function writeSVGFile(svgString) {
    return new Promise((resolve, reject) => {
        fs.writeFile('logo.svg', svgString, err => {
            if (err) {
                reject(err)
            } else {
                resolve();
            }
        }) 
    })
};

module.exports = { writeSVGFile };