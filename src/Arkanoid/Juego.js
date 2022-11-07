import React from 'react';
import Phaser from 'phaser';
import {useState,useEffect} from "react";
import {Gameover} from "./Game-over.js";
import {Congratulations} from "./Congratulations.js";
import Escena from './Escena.js';
import Nivel1 from './Nivel1.js';
import { RestarButton } from './Restar-button.js';



function Juego(){
    

    const [listo,setlisto ]=useState(false);

    useEffect(()=>{
        const CONFIGURACION={
            scale:{
               autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
               width:800,
               height:600
            },
       };
   

       const Escenas=[Escena,RestarButton, Nivel1,Gameover,Congratulations];
       const crearEscena=Scene =>new Scene (CONFIGURACION);
       const iniciarEscena=()=>Escenas.map(crearEscena);

    var config = {
        type: Phaser.AUTO,
        //width: 800,
        //height: 600,
    //},
    ...CONFIGURACION,
        physics: {
            default: 'arcade',
            arcade: {
            }
        },
        scene:iniciarEscena()

        //scene:[Escena,Nivel1,Gameover,Congratulations]

        
        //scene: {
            //preload: preload,
            //create: create
        //}
    };


//arranca el juego
    var game = new Phaser.Game(config);

    game.events.on("LISTO",setlisto)

    return()=>{
        setlisto(false);
        game.destroy(true);
    }

},[listo]);
}
export default Juego;