// storing useful canvas-sketch information in here, instead of across a bunch of project files //

canvas-sketch `filename` --new
// terminal line to create new canvas sketch library and document

canvas-sketch `filename`
//opens an existing sketch

canvas-sketch `filename` --output=`dir`
// creates new directory for saved images: for example output/01 and then saves images to this folder instead of downloads

canvas-sketch `filename` --new --open
// creates new sketch and opens new tab in browser



// JS to create a box
context.fillStyle = "black";
context.beginPath();
context.rect(0, 0, 10, 10);
context.fill();


    context.rect(-w / 2, -h / 2, w, h);
    context.rect(-w * 0.5, -h * 0.5, w, h);
    // setting it's draw from the middle by minus half of width and height means it's drawn from the middle of the shape instead of it's top left
    // div or multiply are both possible

// it's a good habit use draw blocks starting with save and restore functions, I imagine this being the start/end of drawing an image, with the restore telling the pen to go back to where it was to begin

example:
    context.save();
        context.translate(x, y);
        context.rotate(0.3);
        
        context.beginPath();
        context.rect(-w * 0.5, -h * 0.5, w, h);
        context.fill();
    context.restore();


// ROTATE
      context.rotate(0.3);
      // by default, this value is in radians, not degrees but it is easy to convert to degrees. using [target degree rotate] / 180 * Math.PI
      // so for example, to rotate something by 45 degrees, the following could be used:
      // context.rotate(45 / 180 * Math.PI)
      // to use it multiple times, i could create a function:
      const degToRad = (degrees) => {
        return degrees / 180 * Math.PI;
      }

// RANDOM WITHIN A RANGE
const randomRange = (min, max) => {
    return Math.random() * (max - min) + min;
}





.translate
// remaps the 0,0 position on the canvas (initially top left of the canvas without this)
// "The translate() method remaps the (0,0) position on the canvas." - w3 schools


//using pre-made utilies
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
useful for premade functions instead of having to figure everything out

// LIBRARIES
IF LIBRARIES ARE ADDED TO THE CODE, BE SURE TO STOP THE PROCESS AND START IT AGAIN ON THE TERMINAL LINE


// AUDIO

the web audio API is required to make this work with canvas sketch

    // Defines an audio variable, sets it's location (local or online), and plays it when the screen is clicked, and paused if the screen is clicked again

        let audio;

        const sketch = () => {
        audio = document.createElement('audio');
        audio.src = "audio/archetypePt1.mp3";

        return ({ context, width, height }) => {
            context.fillStyle = 'white';
            context.fillRect(0, 0, width, height);
        };
        };

        const addListeners = () => {
        window.addEventListener("mouseup", () => {
            if (audio.paused) audio.play();
            else audio.pause();
        });
        }

        addListeners();
        canvasSketch(sketch, settings);


//OBJECTS VS ARRAYS
objects are things like context. or settings
objects have {} and it's properties are separated by ;
arrays on the other hand use () and ,



//CLASSES
classes need a constructor to include all the instructions on what to "construct"
using `this` means you can define a parameter specific to this class, I'm guessing it means that each version of the class can have it's own version of the same variable?