const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');



//define the user prompts that will populate our data
function userPrompts() {
    
    inquirer
    .prompt([
        {
            name: "text",
            type: "input",
            message: "Please enter up to three characters for your text",
        },
        {
            name: "textColor",
            type: "input",
            message: "Please enter text color (can be 'red' or a hexcode)"
        },
        {
            name: "shape",
            type: "list",
            message: "Please choose a shape",
            choices: ['circle', 'square', 'triangle']
        },
        {
            name: "shapeColor",
            type: "input",
            message: "Please enter a color for your shape (can be 'red' or a hexcode)"
        }
    ])
    .then((answers) => {
        if(answers.text.length > 3) {
            console.log('Please enter at least three characters');
            userPrompts();
        } else {
            writeToFile("logo.svg", answers)
        }
    })
};


function writeToFile(fileName, answers) {
    let svgString = "";
        svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
        svgString += "<g>";
        svgString += `${answers.shape}`
   
        let shape;
        if (answers.shape === 'Circle') {
            shape = new Circle();
            svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}" stroke="${answers.textColor}" />`
        } else if(answers.shape === 'Square') {
            shape = new Triangle();
            svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.color}" stroke="${answers.textColor}" />`
        } else {
            shape = new Square();
            svgString += `<rect x="30" y="30" width="240" height="140" fill="${answers.color}" stroke="${answers.textColor}" />`
        }
    
        //set the shape color...
        svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
        svgString += `</g>`;
        svgString += `</svg>`
        

        fs.writeFileSync(fileName, svgString), (err) => {
            err ? console.log(err) : console.log('logo.svg generated!')
        }
}


userPrompts();