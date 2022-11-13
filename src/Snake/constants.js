const CANVAS_SIZE = [800, 600]; //Tamaño de lienzo
const SNAKE_START = [          //posicion donde comienza el snake
  [8, 7],
  [8, 8]
];
const APPLE_START = [8, 3]; // posicion donde comienza la manzana
const SCALE = 40; // escala del tamaño del mapa
const SPEED = 100; // velocidad del snake
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};
