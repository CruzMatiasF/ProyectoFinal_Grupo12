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

        </ul>
    </nav>
    );
}