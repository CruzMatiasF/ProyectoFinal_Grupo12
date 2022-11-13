import imagenJuego from "./imagen/Arkanoid.jpg";
import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
export default function OtrosJuegos() {
    return (
        <><div className="principal">
            <h1>Arkanoid</h1>

        </div><div className="imagen">

                <img src={imagenJuego} alt="Juego" />

            </div><nav>
                <div>
                        <Link to="/Arkanoid" className="botonJugar">Nivel 1</Link>
                        <Link to="/Arkanoid2" className="botonJugar">Nivel 2</Link>
                </div>
            </nav></>
    );
}//<li><Link to="PiedraPapelTijera" className="botonJugar">Piedra, Papel o Tijeras</Link></li><li><Link to="Ahorcado" className="botonJugar">Ahorcado</Link></li>