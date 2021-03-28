const randomColor = require("randomcolor");
var generate = require('project-name-generator');
const shapes = ["circle", "triangle", "hexagon", "quadilateral"];
let max = shapes.length;

module.exports = function catWare(req, res) {
    let i = rnd(max);
    // todo: add random dimension to the shape
    let catProp = {
        name:generate().dashed,
        primary: randomColor({ luminosity: "dark", count: 1 })[0],//fur color
        secondary: randomColor({ luminosity: "light", count: 1 })[0],
        shape: shapes[i],
        shapeDim: genShapeDim(shapes[i])
    }
    res.status(200).send(catProp);
}

// utility function
function genShapeDim(shape) {
    let dim = [];
    //TODO: decide the max limit of the dimension
    switch (shape) {
        case "quadilateral":
            for (let i = 0; i < 4; i++) dim.push(rnd(10,5));
            break;
        case "circle":
            dim.push(rnd(10,5)/2);
            break;
        case "triangle":
            for(let i=0;i<3;i++) dim.push(rnd(10,5));
            break;
        case "hexagon":
            for(let i=0;i<6;i++) dim.push(rnd(10,5));
    }
    return dim;
}

function rnd(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}