const shape = require('./shapes.js');

const Triangle = shape.Triangle;
const Circle = shape.Circle;
const Square = shape.Square;

describe('Shapes', () => {
  describe('Render triangle', () => {
    it('should return a string for a triangle svg file with the given shape color', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 10 244, 170 56, 170" fill="blue" />');
    })
  });

  describe('Render circle', () => {
    it('should return a string for a circle svg file with the given shape color', () => {
      const shape = new Circle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    })
  });

  describe('Render square', () => {
    it('should return a string for a square svg file with the given shape color', () => {
      const shape = new Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="blue" />');
    })
  });
});