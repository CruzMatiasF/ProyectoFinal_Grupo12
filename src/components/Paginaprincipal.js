import imagenJuego from "./imagen/tuki.jpg";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
    return ( 
        //Se colocaron imagenes y botonea de cada juegos y colaboradores 
        <><div className="principal">
            <h1>ProjectoFinal</h1>

        </div><div className="imagen">

                <img src={imagenJuego} alt="Juego" />

            </div><nav>
                <ul> 
                    <li>
                        <Link to="/Snake" className="botonJugar">Snake</Link>
                    </li>
                    <li>
                        <Link to="/Pong" className="botonJugar">Ping Pong</Link>
                    </li>
                    <li>
                        <Link to="/Dude" className="botonJugar">Dude</Link>
                    </li>
                    <li>
                        <Link to="/Arkanoid" className="botonJugar">Arkanoid</Link>
                    </li>
                    <li>
                        <Link to="/Ahorcado" className="botonJugar">Ahorcado</Link>
                    </li>
                    <li>
                        <Link to="/PiedraPapelTijera" className="botonJugar">Piedra papel o tijera</Link>
                    </li>
                    <li>
                        <Link to="/Colaboradores" className="botonJugar">Colaboradores</Link>
                    </li>
                    
                </ul>
            </nav></>

    );
}

