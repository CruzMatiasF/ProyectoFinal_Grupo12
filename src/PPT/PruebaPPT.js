import { useEffect, useState } from 'react';
import '../PPT/PPT.css';
import sonido02 from "../Ahorcado/sonidos/sonidoGanar.mp3";
import sonido04 from "../Ahorcado/sonidos/sonidoClick.mp3";

const PPT = () => {
  const [eleccionJugador, setEleccionJugador] = useState('Piedra')
  const [eleccionComputadora, setEleccionComputadora] = useState('Piedra')
  const [puntosUsuario, setpuntosUsuario] = useState(0)
  const [puntosComputadora, setpuntosComputadora] = useState(0)
  const [mostrarResultado, setMostrarResultado] = useState(null)
  const [resultado, setResultado] = useState('Veamos quien gana')
  const [gameOver, setGameOver] = useState(false)
  const elecciones = ['Piedra', 'Papel', 'Tijera']

  const hacerClick = (value) => {            // creamos una const "Hacer Click" con un valor "value" que llama a setEleccionJugador y le otorga ese "value"
    setEleccionJugador(value)
    generarEleccionComputadora()            // se llama a generarEleccionComputadora
    play(sonido04)
  }

  const generarEleccionComputadora = () => {                                               //creamos generarEleccionComputadora para otorgarle un valor aleatorio a setEleccionComputadora según el largo de la lista "elecciones"
    const eleccionRandom = elecciones[Math.floor(Math.random() * elecciones.length)]
    setEleccionComputadora(eleccionRandom)  // se le agrega a set EleccionComputadora el valor aleatorio de "eleccionRandom" que devuelve un valor aleatorio de la lista "elecciones"
  }

  const reiniciar = () => {             // creamos una const que reinicia la pagina en la que nos encontramos actualmente
    window.location.reload()
  }

  useEffect(() => {
    const resultadosPosibles = eleccionJugador + eleccionComputadora         // creamos una const "resultadosPosibles" que es igual a la eleccion del jugador + la eleccion de la computadora
    if (puntosUsuario <= 4 && puntosComputadora <= 4) {                       // creamos un if con la condicion de que los puntos del jugador y de la computadora deben ser menores o iguales a cuatro
      if (resultadosPosibles === 'TijeraPapel' || resultadosPosibles === 'PiedraTijera' || resultadosPosibles === 'PapelPiedra') { //creamos un if con las condicion de que los resultados posibles sean en donde el jugador gana, es decir "TijeraPapel, PiedraTijera o PapelPiedra" 
        
        const puntosUsuarioActuales = puntosUsuario + 1  // si las condiciones se cumplen creamos una const "puntosUsuariosActuales"que es igual a los puntos del jugador mas 1
        setpuntosUsuario(puntosUsuarioActuales)          // le asignamos el valor de "puntosUsuariosActuales" a los puntos del jugador
        setMostrarResultado('Punto para el Jugador!')    // le asignamos un valor a MostrarResultado
        
        if (puntosUsuarioActuales === 5) {               // creamos un if con la condicion de que los puntos del jugador actuales sean iguales a 5
          setResultado('Gana el Jugador')                // si las condiciones se cumplen le asignamos el valor "Gana el Jugador" a "Resultado"
          const juegoTerminado = true                    // creamos una const "juegoTerminado" y le asignamos el valor "true"
          setGameOver(juegoTerminado)                    // le asignamos a "GameOver" el valor de "juegoTerminado", es decir "true"
          
        }
      }

      if (resultadosPosibles === 'PapelTijera' || resultadosPosibles === 'TijeraPiedra' || resultadosPosibles === 'PiedraPapel') { //creamos un if con las condicion de que los resultados posibles sean donde la computadora gana, es decir "PapelTijera, TijeraPiedra o PiedraPapel" 
        const puntosComputadoraActuales = puntosComputadora + 1 // si las condiciones se cumplen creamos una const "puntosComputadoraActuales"que es igual a los puntos de la computadora mas 1
        setpuntosComputadora(puntosComputadoraActuales)    // le asignamos el valor de "puntosComputadoraActuales" a los puntos de la computadora
        setMostrarResultado('Punto para la Computadora!')  // le asignamos un valor a MostrarResultado
        if (puntosComputadoraActuales === 5) {             // creamos un if con la condicion de que los puntos de la computadora actuales sean iguales a 5
          setResultado('Gana la computadora')               // si las condiciones se cumplen le asignamos el valor "Gana la Computadora" a "Resultado"
          const juegoTerminado = true                       // creamos una const "juegoTerminado" y le asignamos el valor "true"
          setGameOver(juegoTerminado)                       // le asignamos a "GameOver" el valor de "juegoTerminado", es decir "true"
        }
      }

      if (resultadosPosibles === 'PapelPapel' || resultadosPosibles === 'PiedraPiedra' || resultadosPosibles === 'TijeraTijera') { //creamos un if con las condicion de que los resultados posibles sean donde la computadora y el jugador empaten
        setMostrarResultado('Nadie obtiene un punto!')     // le asignamos a "MostrarResultado" el valor "Nadie obtiene un punto"
      }
    }
  }, [eleccionComputadora, eleccionJugador])

  return (
    <div className="App">
      <h2 className="heading">Piedra, Papel o Tijeras</h2>
      <div className='score'>
        <h2>Puntos del Jugador: {puntosUsuario}</h2>
        <h3>Puntos de la Computadora: {puntosComputadora}</h3>
      </div>

      <div className='choice'>
        <div className='choice-user'>
          <img className='computer-hand' src={`img/${eleccionJugador}.png`} alt=''></img>
        </div>
        <div className='choice-computer'>
          <img className='computer-hand' src={`img/${eleccionComputadora}.png`} alt=''></img>
        </div>
      </div>

      <div className='botonPPT'>
        {elecciones.map((eleccion, index) =>
          <button className='button' key={index} onClick={() => hacerClick(eleccion) } disabled={gameOver}>
            {eleccion}
          </button>
        )}
      </div>

      <div className='result'>
        <h4>Resultado: {mostrarResultado}</h4>
        <h5>Resultado Final: {resultado}</h5>
      </div>

      <div className='button-div'>
        {gameOver &&
          <button className='button' onClick={() => reiniciar()}>¿Reiniciar Juego?</button>
        }
      </div>
    </div>
  )
}
function play(sonido) {
  new Audio(sonido).play();
}

export default PPT
