class Shape {
    // this is just like, whatever and not done
    constructor(fill) {
        this.fill = fill;
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