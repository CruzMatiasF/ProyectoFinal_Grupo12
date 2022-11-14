import React from 'react';
import Phaser from 'phaser';
import {useState,useEffect} from "react";
import Escena from './Escena';


function App(){

    const [listo,setlisto ]=useState(false);
    useEffect(()=>{
    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
                
            }
        },
        scene:[Escena]
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
export default App;