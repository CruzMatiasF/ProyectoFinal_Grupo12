import Phaser from "phaser";

class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }
    preload(){ 
        this.load.image("fondo","img/fondo.png")
        this.load.image("base","img/plataforma.png")
        this.load.image("pelota","img/pelota.png")
        this.load.image("bluebrick","img/brickBlue.png ");
        this.load.image("blackbrick","img/brickBlack.png");
        this.load.image("greenbrick","img/brickGreen.png");
        this.load.image("orangebrick","img/brickOrange.png");
    }

    create (){
        this.scene.start("Play");
    }
}

export default Preload;

