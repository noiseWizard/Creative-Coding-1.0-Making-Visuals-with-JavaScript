const canvasSketch = require('canvas-sketch');

const settings = {
  //having nothing in here doesn't create a border and when using CTRL + S it just saves to the size of the browser

  // dimensions: [600, 600]
    //creates a blank canvas 600 x 600 pixels

  // dimensions: "A4",
    // pixelsPerInch: 300,
    // orientation: 'landscape'
    //this set creates an a4 document with 300pixels per inch in the landscape dimensions
    //canvas sketch documentation has more

  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    let lineWidth = context.lineWidth = width * 0.01;
    //this wasn't part of the tutorial, but the thin lines were annoying me. It could be `4` like previously, but it's cool to see width can also be a percentage
    //later in the video, he changed it to 1%

    // const boxWidth = 60;
    // const boxHeight = 60;
    // const gap = 20;
    // let x, y;
      //earlier settings in the example
    
    const boxWidth = width * 0.10;
    const boxHeight = height * 0.10;
    const gap = width * 0.03;
    //setting the box width/gap/height like this means the box size will always be 0.10 (or 10%) of whatever the canvas size is (the width/height sections)
    const ix = width * 0.17;
    const iy = width * 0.17;
    // changing x and y to percentages also means they will scale too

    const off = width * 0.02;
    // this also removes the hard coded numbers which were previously coded in

    for (i = 0; i < 5; i++) {

      for (j = 0; j < 5; j++) {

        x = ix + (boxWidth + gap) * i;
        y = iy + (boxHeight + gap) * j;

        context.beginPath();
        context.rect(x, y, boxWidth, boxHeight)
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + off / 2, y + off / 2, boxWidth - off, boxHeight - off);
          context.stroke();
        }
      }

    }
  };
};

// BROWSER MUST BE IN FOCUS FOR CTRL+S TO WORK
// Part of javascript library auto saves it to downloads, unless it's set with output (see below)

// canvas-sketch sketch-01.js --new
// terminal line to create new canvas sketch library and document

// canvas-sketch sketch-01.js reopens the doc
// canvas-sketch sketch-01.js --output=output/01 creates new directory: output/01 and then saves them to this folder instead

canvasSketch(sketch, settings);