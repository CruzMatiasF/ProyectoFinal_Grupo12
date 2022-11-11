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
                        <Link to="Colaboradores" className="botonJugar">Colaboradores</Link>
                    </li>
                    <li>
                        <Link to="MasJuegos" className="botonJugar">Mas Juegos</Link>
                    </li>
                    <li>
                        <Link to="Arkanoid" className="botonJugar">Arkanoid</Link>
                    </li>

                </ul>
            </nav></>

    );
}

