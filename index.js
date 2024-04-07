const {userInput} = require('./lib/inquirer');
const {writeSVGFile} = require('./lib/fileWriter');
const {Triangle, Circle, Square} = require('./lib/shapes');


//define the main function that will run the app
async function runApp() {
    try {
        // obtain user input from inquirer prompts
        const userData = await userInput();

        // define the corresponding shape based on user data
        let shape;
        switch (userData.shape) {
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
                throw new Error('Invalid Shape!')
        }

        //set the shape color...
        shape.setColor(userData.shapeColor);

        //generate the SVG string needed for the shape...
        const svgString = shape.render();

        // save our new string to a file named logo.svg!
        await writeSVGFile(svgString);

        //if successful, print success msg. If there are errors, run error message.
        console.log('logo.svg successfully generated!')
    } catch(err) {
        console.error('Oops! Something went wrong:', err)
    }
};

// Tell our app to start running.
runApp();