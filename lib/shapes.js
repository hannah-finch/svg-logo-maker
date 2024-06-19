class Shape {
    constructor(fill, text) {
// this.text will be the <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
        this.fill = fill;
        this.line1 = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        this.text = text;
        this.line3 = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`
    }

    setColor(color) {
        Shape.fill = color;
        console.log(Shape.fill);
        // return color;
    }

};

class Triangle extends Shape {
    constructor(fill, something, setColor) {
        super(fill);
        this.something = something;
        // this.setColor = setColor;
    }

    // THIS DOESN'T DO ANYTHING YET
    
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${Shape.fill}" />`
    }
};

const testTriangle = new Triangle;
console.log(testTriangle.render());
const shape = new Triangle;


class Circle extends Shape {
    constructor() {

    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`
    }
};

class Square extends Shape {
    constructor() {

    }

};

module.exports = Triangle;