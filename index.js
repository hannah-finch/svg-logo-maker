//Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

const Triangle = shapes.Triangle;
const Circle = shapes.Circle;
const Square = shapes.Square;

//Array of questions for user input
const questions = [
    {
    type: "input",
    message: "Enter text for logo. (Must not be more than 3 characters)",
    name: "text",
    },
    {
    type: "input",
    message: "Enter a text color",
    name: "textColor",
    },
    {
    type: "list",
    message: "Select a shape for the logo",
    choices: ["Triangle", "Circle", "Square"],
    name: "shape",
    },
    {
    type: "input",
    message: "Enter a shape color",
    name: "fill",
    }
];

//Function to take in data and write SVG file
const writeToFile = (svgFormat) => {
    fs.writeFile('logo.svg', svgFormat, (err) => { err
        ? console.error(err)
        : console.log('logo.svg has been generated!')
    })
};

//Function to generate the SVG format
function generateSVG(data) {
    let shape = data.shape;
    let renderedShape;
    switch(shape) {
        case "Triangle":
            renderedShape = new Triangle;
            break;
        case "Circle":
            renderedShape = new Circle;
            break;
        case "Square":
            renderedShape = new Square;
            break;
        default:
            console.log("no shape selected")
    };

    // send input to set the fill color in the Shape class
    renderedShape.setColor(`${data.fill}`);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${renderedShape.render()}
<text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text></svg>`
};

//Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const svgFormat = generateSVG(data);
        writeToFile(svgFormat);
    })
};

//Function call to initialize app
init();