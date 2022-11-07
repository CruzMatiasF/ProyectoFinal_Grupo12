import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./index.css";
import Colaboradores from "./Colaboradores.js";
import PaginaPrincipal from "./Paginaprincipal.js";
import MasJuegos from "./Arkanoid.js";
import Arkanoid from "../Arkanoid/Juego.js"

function App() {
    return (
        <Container>

            <div>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} className='Inicio' />;
                    <Route path="Colaboradores" element={<Colaboradores />} className='Inicio' />;
                    <Route path="MasJuegos" element={< MasJuegos/>} className='Inicio' />;
                    <Route path="Arkanoid" element={< Arkanoid/>} className='Inicio' />;
                </Routes>
            </div>
        </Container>
    );
}
export default App;
