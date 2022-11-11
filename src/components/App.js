import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./index.css";
import Colaboradores from "./Colaboradores.js";
import PaginaPrincipal from "./Paginaprincipal.js";
import MasJuegos from "./MasJuegos.js";
import Arkanoid from "../Arkanoid/Juego.js"
import Arkanoid2 from "../Arkanoid/Juego2.js"

function App() {
    return (
        <Container>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} className='Inicio' />;
                    <Route path="Colaboradores" element={<Colaboradores />} className='Inicio' />;
                    <Route path="MasJuegos" element={< MasJuegos/>} className='Inicio' />;
                    <Route path="Arkanoid" element={< Arkanoid/>}/>;
                    <Route path="Arkanoid2" element={< Arkanoid2/>}/>;
                </Routes>
        </Container>
    );
}
export default App;
