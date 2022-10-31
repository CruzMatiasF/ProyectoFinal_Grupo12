import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import "./index.css";
import Colaboradores from "./Colaboradores.js";
import PaginaPrincipal from "./Paginaprincipal";

function App() {
    return (
        <Container>

            <div>
                <Routes>
                    <Route path="/" element={<PaginaPrincipal />} className='Inicio' />;
                    <Route path="Colaboradores" element={<Colaboradores />} className='Inicio' />;
                </Routes>
            </div>
        </Container>
    );
}
export default App;
