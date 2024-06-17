// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.

// The following example test should pass:


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// I'm confused about what to require here. On new Triangle, how does it know I'm using the triangle class? Do I need to separate the shape classes into different files? That makes no sense. Or do one const Shape = require('./shapes.js), and then do const shape = new Shape() instead of new Triangle?  Maybe const triangle = new Shape()......... I'm just gonna kinda mess around and do whatever and then come back later and try and make sense of it

const Shapes = require('./shapes.js')

describe('Shapes', () => {
  
  describe('Render triangle', () => {
    it('should return a string for a triangle svg file with the given shape color', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
  });

  describe('Render circle', () => {
    it('should return a string for a circle svg file with the given shape color', () => {
      const shape = new Circle();
      shape.setColor("blue");
      // put in different string cause I just copied triangle
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
  });

  describe('Render square', () => {
    it('should return a string for a square svg file with the given shape color', () => {
      const shape = new Square();
      shape.setColor("blue");
      // put in different string cause I just copied triangle
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
  });

});