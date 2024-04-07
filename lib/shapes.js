class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color;
    }
    render(){
        //create the render method in the subclasses
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="30" y="30" width="240" height="140" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square}