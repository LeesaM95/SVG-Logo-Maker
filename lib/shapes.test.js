const { Circle, Square, Triangle } = require('./shapes');

describe('Circle Class', () => {
    test('render method should return an SVG string for Circle', () => {
        const circle = new Circle();
        circle.setColor('#3F888F');
        circle.setTextColor('white');
        expect(circle.render()).toEqual('<circle cx="25" cy="75" r="20" fill="#3F888F" stroke="white" />')
    })
});

describe('Square Class', () => {
    test('render method should return an SVG string for Square', () => {
        const square = new Square();
        square.setColor('pink');
        square.setTextColor('#00FF7F');
        expect(square.render()).toEqual('<rect x="30" y="30" width="240" height="140" fill="pink" stroke="#00FF7F" />')
    })
});

describe('Triangle Class', () => {
    test('render method should return an svg string for Triangle', () => {
        const triangle = new Triangle();
        triangle.setColor('violet');
        triangle.setTextColor('white');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="violet" stroke="white" />')
    })
})