const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.3;
    const h = height * 0.3;

    context.save();
    // this saves the current location of context (I'm assuming to top left)

    context.translate(x, y);
    // translate remaps 0,0 position of the canvas. useful if i want to position other things around a center point....eg fake 3D visuals?

    context.rotate(0.3);
    // rotates the shape depending on it's relation to wherever 0,0 is mapped (this is why context.tranlate() can be useful)

    context.beginPath();
    context.rect(-w * 0.5, -h * 0.5, w, h);
    // setting it's draw from the middle by minus half of width and height means it's drawn from the middle of the shape instead of it's top left 
    context.fill();
    context.restore();
    // loads the previous save state of context (so above, it was originally true 0,0, context.restore means it goes back there to then draw another shape, instead of here it is currently)
    // without save/restore, the next drawing would be based on whatever the current location of 'the pen' is

    context.translate(100, 400);
    context.beginPath();
    context.arc(0, 0, 50, 0, Math.PI * 2);
    context.fill();

  };
};

canvasSketch(sketch, settings);
