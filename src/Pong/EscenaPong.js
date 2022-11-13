import Phaser from "phaser";
import {Scoreboard} from "../Pong/ScoreBoard.js";
import Palas from "../Pong/palas.js";


class EscenaPong extends Phaser.Scene{ 
    constructor(config) {
        super({ key : "Escena"});

    }
    //creamos un init para ver el puntaje del jugador
    init() {
        //instanciamos la nueva pagina en este caso scoreboard
        this.scoreboard=new Scoreboard (this);
    }
 
    platforms=null;
    cursors=null;
    pelota=null;
    
    preload(){ 
        this.load.image("fondo","img/fondo.png")
        this.load.image("pelota","img/pelota.png")
        this.load.image("izquierda","img/left_pallete.png");
        this.load.image("derecha","img/right_pallete.png");
        this.load.image("separador","img/separator.png");

    }
    
    create() {
        let center_width = this.sys.game.config.width/2;
        let center_height = this.sys.game.config.height/2;
    
        // Separador
        this.add.image(center_width, center_height, "separador");
    
        // Palas
        this.izquierda = new Palas(this, 30, center_height, "izquierda");
        this.derecha = new Palas(this, this.sys.game.config.width-30, center_height, "derecha");
        
        // bola
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_width, center_height, "pelota");
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        // Fisicas
        this.physics.add.collider(this.ball, this.izquierda, this.chocaPala, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.chocaPala, null, this);

        // Controles
        // Pala derecha
        this.cursor = this.input.keyboard.createCursorKeys();

        // Pala izquierda
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update() {
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }
        

        // Control de las palas
        // pala derecha
        if(this.cursor.down.isDown) {
            this.derecha.body.setVelocityY(300);
        } else if(this.cursor.up.isDown) {
            this.derecha.body.setVelocityY(-300);
        } else {
            this.derecha.body.setVelocityY(0);
        }
        // Pala izquierda
        if(this.cursor_S.isDown) {
            this.izquierda.body.setVelocityY(300);
        } else if(this.cursor_W.isDown) {
            this.izquierda.body.setVelocityY(-300);
        } else {
            this.izquierda.body.setVelocityY(0);
        }
        
    }
    
    chocaPala() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}

export default EscenaPong;