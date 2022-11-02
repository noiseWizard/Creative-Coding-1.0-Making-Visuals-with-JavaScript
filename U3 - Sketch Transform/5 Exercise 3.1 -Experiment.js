// Experiment with different values:
// number of strokes
// angles
// scales, etc

const canvasSketch = require('canvas-sketch');
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080]
};



const sketch = () => {
  return ({ context, width, height }) => {
    //sets the pen colour to white
    context.fillStyle = 'white';
    //draws a filled rectangle, starting from top left to the width, and height of the dimensions (in settings above)
    context.fillRect(0, 0, width, height);

    //sets the pen colour to black
    context.fillStyle = "black";

    //tells the pen the definitions of the centre of the canvas is found at these locations:
    const cx = width * 0.5;
    const cy = height * 0.5;

    //tells the pen there will be two constants, w & h which are w, 0.01 the value of width, and h which is 10% of height
    const w = width * 0.01;
    const h = height * 0.1;

    //announces there are two variables, x & y which will be used in future
    let x, y;

    //tells the pen how many strokes it will be making per shape
    //so if it's set to 1, it will draw 1 circle, and 1 in/out line
    const num = 5;

    //tells the pen the radius of the circle will be the a percentage of the width of the canvas. for example `width * 0.1` means the circle radius will be 10% of canvas
    const radius = width * 0.3;

    // for loop which tells the pen to draw x number of circles and in/out lines. x is defined by `num` above
    for (let i = 0; i < num; i++) {

      //defines a slice as "how many cuts there are, and how long each cut is in degrees of a circle"
      //lower numbers are harder to see because there is a high chance of the lines overlapping
      const slice = math.degToRad(360 / num);

      //defines angle as how many degrees the next in/out line will be from the last (so if num=2, both in/out lines will be 180 from each other)
      const angle = slice * i;

      //defines the previously global variables of x & y, and tells the pen to draw the in/out lines near the circles, instead of at the top, left of the page
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      // //DRAWING IN/OUT LINES_START
      //   //save point, telling the pen to keep drawing around the same point (center of the page)
      //   context.save();

      //   //this tells the pen where it should start drawing 
      //   context.translate(x, y);

      //   //this tells the pen to get the value of angle, and making it negative. this makes the in/out lines on the page face in/out
      //   context.rotate(-angle);

      //   //this tells the pen the lines with vary in length and width, the scale of the lines?
      //   context.scale(random.range(0.2, 2), random.range(0.2, 0.5))

      //   //tells the pen to start drawing with the above settings
      //   context.beginPath();

      //   //tells the pen the coordinate of the rectangle
      //   context.rect(-w * 0.5, random.range(0, -h *0.5), w, h);

      //   //tells the pen to fill in the lines
      //   context.fill();

      //   //once the line is draw, this sends it back to the save point to draw the next one (this is mainly due to the translate function finding where 0,0 is)
      //   context.restore();
      // //DRAWING IN/OUT LINES_END

      // DRAWING CIRCLES_START
      // this draws the circle
      context.save();
      context.translate(cx, cy);
      context.rotate(-angle)

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(0, -8), slice * random.range(1, 5));
      context.stroke();
      context.restore();
      // DRAWING CIRCLES_END

    };
  }
};

canvasSketch(sketch, settings);
