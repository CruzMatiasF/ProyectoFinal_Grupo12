import React, { Component, useEffect } from 'react';
import '../Ahorcado/Hangman.css';
import { palabraRandom } from "../Ahorcado/Palabras.js";
import sonido01 from "../Ahorcado/sonidos/sonidoClick.mp3";
import sonido02 from "../Ahorcado/sonidos/sonidoGanar.mp3";
import sonido03 from "../Ahorcado/sonidos/sonidoPerder.mp3";
import step0 from "../Ahorcado/images/0.jpg";
import step1 from "../Ahorcado/images/1.jpg";
import step2 from "../Ahorcado/images/2.jpg";
import step3 from "../Ahorcado/images/3.jpg";
import step4 from "../Ahorcado/images/4.jpg";
import step5 from "../Ahorcado/images/5.jpg";
import step6 from "../Ahorcado/images/6.jpg";

class Hangman extends Component {
    static defaultProps = {
      maxErrores: 6,
      images: [step0, step1, step2, step3, step4, step5, step6]
    }
  
    constructor(props) {
      super(props);
      this.state = {
        error: 0,
        adivinado: new Set([]),
        respuesta: palabraRandom()
      }
    }
  
    adivinar = e => {
      let letter = e.target.value;
      this.setState(st => ({
        adivinado: st.adivinado.add(letter),
        error: st.error + (st.respuesta.includes(letter) ? 0 : 1)
      }));
    }
  
    palabra_adivinada() {
      return this.state.respuesta.split("").map(letter => (this.state.adivinado.has(letter) ? letter : " _ "));
    }
  
    generarBotones () {


      return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
        <button className='Boton'
          key={letter}
          value={letter}
          onClick={this.adivinar}
          disabled={this.state.adivinado.has(letter)}
        >
          {letter}
        </button>
      ));
    }
  
    ResetearBoton = () => {
      this.setState({
        error: 0,
        adivinado: new Set([]),
        respuesta: palabraRandom()
        
      });
    }
  
    render() {
      const Perdedor = this.state.error >= this.props.maxErrores;
      const Ganador = this.palabra_adivinada().join("") === this.state.respuesta;
      let gameStat = this.generarBotones();
  
      if (Ganador) {
        gameStat = "Ganaste!!!"
        play(sonido02)
      }
  
      if (Perdedor) {
        gameStat = "Perdiste!!!"
        play(sonido03)
      }
  
      return (
        <div className="Hangman container">
          <h1 className='text-center'>Ahorcado</h1>
          <div className="float-right">Suposiciones incorrectas: {this.state.error} de {this.props.maxErrores}</div>
          <div className="text-center">
            <img src={this.props.images[this.state.error]} alt=""/>
          </div>
          <div className="text-center">
            <p>Adivina la palabra: Son lenguajes de programacion</p>
            <p>
              {!Perdedor ? this.palabra_adivinada() : this.state.respuesta}
            </p>
            <p>{gameStat}</p>
            <button className='Reiniciar' onClick={this.ResetearBoton}>Reiniciar</button>
          </div>
        </div>
      )
    }
  }

  function play(sonido) {
    new Audio(sonido).play();
  }
  export default Hangman;


