import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import sonido03 from "../Ahorcado/sonidos/sonidoPerder.mp3";
import sonido04 from "../Ahorcado/sonidos/sonidoClick.mp3";
import {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
} from "./constants";


const App = () => {
  const canvasRef = useRef();
  const [snake, setSnake] = useState(SNAKE_START); // estado de la serpiente
  const [apple, setApple] = useState(APPLE_START); // estado de la manzana
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null); // la serpiente deja de moverse
    setGameOver(true); // establece gameover a true
    play(sonido03)
  };

  const moveSnake = ({ keyCode }) =>
    keyCode >= 37 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));
    //LA manzana se creara en un rango aleatorio dentro del tamaño del mapa

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= CANVAS_SIZE[0] ||
      piece[0] < 0 ||
      piece[1] * SCALE >= CANVAS_SIZE[1] ||
      piece[1] < 0
    )
    // si el snake choca en el borde del marco pierde
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
       // si el snake toca su mismos cuerpo pierde
    }
    return false;
  };

  const checkAppleCollision = newSnake => { 
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      // si la posicion newSnake es igual a la manzana
      let newApple = createApple(); 
      // se declara la nueva manzana y se le asigna el metodo
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      play(sonido04)
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  };

  const startGame = () => { // esta funcion establecera
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
  };

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "pink";
    snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
    context.fillStyle = "lightblue";
    context.fillRect(apple[0], apple[1], 1, 1);
  }, [snake, apple, gameOver]);

  return (
    <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
      <canvas
        style={{ border: "1px solid black" }}
        ref={canvasRef}
        width={`${CANVAS_SIZE[0]}px`}
        height={`${CANVAS_SIZE[1]}px`}
      />
      {gameOver && <div>Perdiste!</div>}
      <button onClick={startGame}>Empezar Juego</button>
    </div>
  );
};
function play(sonido) {
  new Audio(sonido).play();
}


export default App;
