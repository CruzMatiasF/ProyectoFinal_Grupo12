import { RestarButton } from "./Restar-button";

export class Congratulations extends Phaser.Scene{
    constructor() {
        super({ key : "congratulations"});
        
        //instanciamos el boton de reiniciar
        this.restartButton= new RestarButton(this);
    }
    preload(){ 
        //le cargamos la imagen de congratulations
        this.load.image("congratulations","img/congratulations.png");
        //precargamos la imagen de restart button 
        this.restartButton.preload();
    }
    create(){
        //añadimos la imagen de fondo
        this.add.image(410,250,"fondo");    
        //creamos el boton restart en la escena del juego
        this.restartButton.create();
        //y por ultimo le añadimos una imagen de congratulations
        this.congratsImage = this.add.image(400,90,"congratulations");
    }
}



