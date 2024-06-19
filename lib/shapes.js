class Shape {
    // this is just like, whatever and not done
    constructor(fill, text) {
        this.fill = fill;
        this.line1 = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
        this.text = text;
        this.line3 = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text></svg>`
    }
    setColor(color) {
        Shape.fill = color;
    }

};

class Triangle extends Shape {
    constructor(fill) {
        super(fill);
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${Shape.fill}" />`
    }
};

class Circle extends Shape {
    constructor(fill) {
        super(fill);
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${Shape.fill}" />`
    }
};

class Square extends Shape {
    constructor(fill) {
        super(fill);
    }
    render() {
        return `<rect cx="150" cy="100" width="160" height="160" fill="${Shape.fill}" />`
    }
};

module.exports = { Triangle, Circle, Square }