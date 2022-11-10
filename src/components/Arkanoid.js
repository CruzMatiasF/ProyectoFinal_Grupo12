import "./index.css";
import "./App.css";
import { Link } from "react-router-dom";
export default function OtrosJuegos() {
    return (
        <nav>
        <ul>
            <li>
                <Link to="Arkanoid" className="botonJugar">Arkanoid</Link>
            </li>
            <li>
            <Link to="PiedraPapelTijera" className="botonJugar">Piedra, Papel o Tijeras</Link>
            </li>
            <li>
            <Link to="Ahorcado" className="botonJugar">Ahorcado</Link>
            </li>

        </ul>
    </nav>
    );
}