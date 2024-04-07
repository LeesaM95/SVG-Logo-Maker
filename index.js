const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { writeSVGFile } = require('./lib/fileWriter');
const { Triangle, Circle, Square } = require('./lib/shapes');


//defining a function to store our user's input
class SVGMaker {
    constructor() {
        this.userInput = {};
        this.examplesPath = path.join(__dirname, 'examples');
    }
}

//define the user prompts that will populate our data
function userInput() {
    return inquirer.prompt([
        {
            name: "text",
            type: "input",
            message: "Please enter up to three characters for your text",
            validate: function (value) {
                return value.length > 0 && value.length <= 3 ? true : "Please enter up to three characters"
            }
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
}


function createShape() {

    // define the corresponding shape based on user data
    let shape;
    switch (this.userInput.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
        default:
            console.error('Invalid Shape!');
            return null;
    }

    //set the shape color...
    shape.setColor(this.userInput.shapeColor);
    shape.setTextColor(this.userInput.textColor);

    return shape;

    //generate the SVG string needed for the shape...
}

function writeSVGFile(shape) {
    const shapeSvg = shape.render();
    const textSvg = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.userInput.textColor}">${this.userInput.text}</text>`
    const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n  ${shapeSvg}\n  ${textSvg}\n</svg>`;

    const fileName = `logo.svg`;
    const filePath = path.join(this.examplesPath, fileName);

    try {
        fs.writeFileSync(filePath, svgString);
        console.log(`Generated ${fileName} in the examples folder!`)
    } catch (err) {
        console.error("Oops! Something went wrong:", err.message)
    };


    async function  run() {
        this.userInput = await this.userInput();
        const shape = this.createShape();

        if (shape) {
            this.writeSVGFile(shape)
        } else {
            console.log("Creation failed. Please try again.")
        }
    }
};


// Tell our app to start running.
const logoMaker = new SVGMaker();
logoMaker.run();