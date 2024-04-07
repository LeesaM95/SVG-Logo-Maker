// pull in the inquirer package to make sure prompts are written and generated
const inquirer = require('inquirer');

function userInput() {
    return inquirer.createPromptModule([
        {
            name: "text",
            type: "input",
            message: "Please enter up to three characters for your text",
            validate: function(value) {
                return value.length > 0 && value.length <= 3 ? true: "Please enter up to three characters"
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
};

module.exports = {userInput};