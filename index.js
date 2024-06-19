// let's just do some quick planning before I try and write tests. I just wanna start the functions :( But I gotta write tests first... and that is less fun to me. In the example, 11 tests were checked. That seems like a lot. I don't even think this'll require that many functions, so what the flip are they testing anyway? Imma go back and look at the testing examples from class.
/*

WHAT SHOULD HAPPEN:
1. enter command node index.js
2. users are prompted for stuff (will need inquirer)
    - Enter text for logo. (Must not be more than 3 characters)
    - Enter a text color
    - Select a shape for the logo
        - circle, square, triangle
    - Enter a shape color
3. logo.svg is generated

I read up on writing svg, it seems pretty straight forward, just work from the format. This is basically like the readme challenge, except you're just making an svg instead of a readme.

*/

//Require packages
const inquirer = require('inquirer');
const fs = require('fs');
const shape = require('./lib/shapes.js')

const Triangle = shape.Triangle;
const Circle = shape.Circle;
const Square = shape.Square;

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
const writeFile = () => {};

//Function to generate the SVG format
function generateSVG(data) {
    let text = `${data.text}`;
    let textColor = `${data.textColor}`;
    let shape = `${data.shape}`;
    let shapeFill = `${data.fill}`;

    //just try and make a triangle first
    let renderedShape = new Triangle
    renderedShape.setColor(`${data.fill}`);

    // console.log(`${renderedShape.line1}
    // ${renderedShape.render()}`)

    return `${renderedShape.line1}
${renderedShape.render()}
${renderedShape.line3}`

};


//Function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        console.log(generateSVG(data));
    })
};

//Function call to initialize app
init();