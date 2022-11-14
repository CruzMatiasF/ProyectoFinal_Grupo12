import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./index.css";
import Colaboradores from "./Colaboradores.js";
import PaginaPrincipal from "./Paginaprincipal.js";
import Arkanoid from "./ArkanoidP.js";
import ArkanoidLvl1 from "../Arkanoid/Juego.js"
import ArkanoidLvl2 from "../Arkanoid/Juego2.js"
import Ahorcado from "../Ahorcado/Ahorcado.js";
import PiedraPapelTijera from "../PPT/PruebaPPT.js";
import Snake from "../Snake/Snake.js";
import Pong from "../Pong/Pong.js";
import Dude from "../Dude/Dude.js"


function App() {
    return (                
        // 1-path nombra el elemento                   
        // 2-Elemento enlazado
        //                         1                         2
        <Container><Routes><Route path="/" element={<PaginaPrincipal />} className='Inicio' />;
                    <Route path="/Colaboradores" element={<Colaboradores />} className='Inicio' />;
                    <Route path="/Arkanoid" element={< Arkanoid/>} className='Inicio' />;
                    <Route path="/ArkanoidLvl1" element={< ArkanoidLvl1/>}className='Inicio'/>;
                    <Route path="/Arkanoid2" element={< ArkanoidLvl2/>}className='Inicio'/>;
                    <Route path="/Ahorcado" element={< Ahorcado/>}className='Inicio'/>;
                    <Route path="/PiedraPapelTijera" element={< PiedraPapelTijera/>}className='Inicio'/>;
                    <Route path="/Snake" element={< Snake/>}className='Inicio'/>;
                    <Route path="/Pong" element={< Pong/>}className='Inicio'/>;
                    <Route path="/Dude" element={< Dude/>}className='Inicio'/>;
                </Routes>
        </Container>
    );
}
export default App;
