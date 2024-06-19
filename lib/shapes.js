class Shape {
    setColor(color) {
        Shape.fill = color;
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 10 244, 170 56, 170" fill="${Shape.fill}" />`
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${Shape.fill}" />`
    }
};

class Square extends Shape {
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${Shape.fill}" />`
    }
};

module.exports = { Triangle, Circle, Square }