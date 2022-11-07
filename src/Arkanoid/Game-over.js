
import { RestarButton } from "./Restar-button.js";

export class Gameover extends Phaser.Scene{
    constructor() {
        super({ key : "gameover"});
        //instanciamos el boton de reiniciar
        this.restartButton= new RestarButton(this);
    }
    preload(){ 
        //le cargamos la imagen de gameover
        this.load.image("gameover","img/gameover.png");
        //precargamos la imagen de restart button 
        this.restartButton.preload();
    }
    create(){
        //añadimos la imagen de fondo
        this.add.image(410,250,"fondo");    
        //creamos el boton restart en la escena del juego
        this.restartButton.create();
        //y por ultimo le añadimos una imagen de gameover
        this.gameoverImage=this.add.image(400,90,"gameover");
    }
}