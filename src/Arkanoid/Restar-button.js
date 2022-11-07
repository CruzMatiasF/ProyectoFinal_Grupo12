

export class RestarButton {
    constructor(scene) {
        this.relatedScene = scene;
        
    }

    preload() {
        //cargarremos el sprite, en este caso el de restart y le añadimos un framde ancho como de alto 

        this.relatedScene.load.spritesheet("button", "img/restart.png", { frameWidth: 190, frameHeigth: 49 });

        this.relatedScene.load.spritesheet("button", "./img/restart.png", { frameWidth: 190, frameHeigth: 49 });

    }

    create() {
        //añadimos este boton a la escena y para que sea el boton interactivo 
        this.startButton = this.relatedScene.add.sprite(400, 300, "button").setInteractive();
        

        //cada vez que pongamos el mouse o el cursor en el boton este cambiara 
        this.startButton.on("pointerover", () => {
            //le añadimos 1 para que tome en este caso la segunda imagen del frame 
            this.startButton.setFrame(1);
        });
        //esto cada vez que saquemos el cursor del boton 
        this.startButton.on("pointerout", () => {
            this.startButton.setFrame(0);
        });
        //cuando hacemos click en el boton restart
        this.startButton.on("pointerdown", () => {
            //nos mandara a la escena del juego 
            this.relatedScene.scene.start("Escena");
        });
        
    }
}


