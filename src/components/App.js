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
import Ahorcado from "../Ahorcado/Ahorcado.js";
import PiedraPapelTijera from "../PPT/Jugar.js";
import Snake from "../Snake/Snake.js";


function App() {
    return (
        <Container>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} className='Inicio' />;
                    <Route path="/Colaboradores" element={<Colaboradores />} className='Inicio' />;
                    <Route path="/MasJuegos" element={< MasJuegos/>} className='Inicio' />;
                    <Route path="/Arkanoid" element={< Arkanoid/>}className='Inicio'/>;
                    <Route path="/Arkanoid2" element={< Arkanoid2/>}className='Inicio'/>;
                    <Route path="/Ahorcado" element={< Ahorcado/>}className='Inicio'/>;
                    <Route path="/PiedraPapelTijera" element={< PiedraPapelTijera/>}className='Inicio'/>;
                    <Route path="/Snake" element={< Snake/>}className='Inicio'/>;
                </Routes>
        </Container>
    );
}
export default App;
