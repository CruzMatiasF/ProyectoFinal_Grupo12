import imagenJuego from "./imagen/tuki.jpg";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
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
                        <Link to="/Colaboradores" className="botonJugar">Colaboradores</Link>
                    </li>
                    <li>
                        <Link to="/MasJuegos" className="botonJugar">Arkanoid</Link>
                    </li>
                    <li>
                        <Link to="/Ahorcado" className="botonJugar">Ahorcado</Link>
                    </li>
                    <li>
                        <Link to="/PiedraPapelTijera" className="botonJugar">Piedra papel o tijera</Link>
                    </li>
                </ul>
            </nav></>

    );
}

