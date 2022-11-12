import "../PPT/App.css"
import "../PPT/index.css"
//import "../PPT/Play.js"


function Jugar() {
    return (
        <>
            <div className="container">
                <section className="lugar">
                    <div>
                        <div>
                            <h1 className="titulo"> Jugador 1 </h1>
                            <img id="user-img" className="mano-Jugador" src="./img/Papel.png"/>

                        </div>
                        <h2 className="puntajeJ"> Puntaje Igual a: 0 </h2>
                    </div>
                    <div id="start-text">
                        Elige una opción
                    </div>
                    <div>
                        <div>
                            <h1 className="titulo"> Jugador 2</h1>
                            <img id="machine-img" className="mano-Computadora" src="img/Papel.png"/>

                        </div>
                        <h2 className="puntajeC"> Puntaje Igual a: 0</h2>
                    </div>
                </section>
                <div id="Botones" >
                    <button  id="Piedra" type="button">
                        <img src="img/Piedra.png" />
                    </button>
                    <button id="Papel" type="button">
                        <img src="img/Papel.png" />
                    </button>
                    <button id="Tijera" type="button">
                        <img src="img/Tijera.png" />
                    </button>
                </div>

            </div>
            
            

        </>
        

    );


}


export default Jugar;