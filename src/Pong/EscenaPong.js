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
        //cargamos las imagenes que vamos a usar
        this.load.image("fondo","img/fondo.png")
        this.load.image("pelota","img/pelota.png")
        this.load.image("izquierda","img/left_pallete.png");
        this.load.image("derecha","img/right_pallete.png");
        this.load.image("separador","img/separator.png");

    }
    
    create() {
        //esto lo creamos para que el separador este en medio de la pantalla del juego
        let center_width = this.sys.game.config.width/2;
        let center_height = this.sys.game.config.height/2;
    
        // creamos el separador que va a estar en medio del juego
        this.add.image(center_width, center_height, "separador");
    
        //creamos las palas tanto izquierda como derecha
        this.izquierda = new Palas(this, 30, center_height, "izquierda");
        this.derecha = new Palas(this, this.sys.game.config.width-30, center_height, "derecha");
        
        // creamos la posicion de la pelota
        this.physics.world.setBoundsCollision(false, false, true, true);
        this.ball = this.physics.add.image(center_width, center_height, "pelota");
        //esto colisionara con las paredes
        this.ball.setCollideWorldBounds(true);
        //cuando rebote con algo devolvera la misma velocidad con la que choco
        this.ball.setBounce(1);
        //esto va a iniciar siempre la pelota en el lado izquierdo
        this.ball.setVelocityX(-180);

        // le añadimos las fisicas para que puedan colisionar la pelota y las palas
        this.physics.add.collider(this.ball, this.izquierda, this.chocaPala, null, this);
        this.physics.add.collider(this.ball, this.derecha, this.chocaPala, null, this);

        // Controles
        // Creamos el movimiento de la pala derecha
        this.cursor = this.input.keyboard.createCursorKeys();

        // y de la misma forna la pala izquierda,que se pueda ir para arriba con la letra W y la letra S para abajo 
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }
    update() {
        //esto hara que cuando la pelota se salga de la pantalla
        if(this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            //esta estara centrada nuevamente 
            this.ball.setPosition(this.sys.game.config.width/2, this.sys.game.config.height/2);
        }
    
        // son los controles de la pala derecha
        if(this.cursor.down.isDown) {
            //esto hara que la pala derecha pueda ir hacia abajo
            this.derecha.body.setVelocityY(300);
        } else if(this.cursor.up.isDown) {
            //esto hara que la pala derecha pueda ir hacia arriba
            this.derecha.body.setVelocityY(-300);
        } else {
            //esto hara que la pala derecha se quede quieto si no se apreta ninguna tecla de hacia arriba ni hacia abajo
            this.derecha.body.setVelocityY(0);
        }
        //estos sons los controles de la pala izquierda
        if(this.cursor_S.isDown) {
             //esto hara que la pala derecha pueda ir hacia abajo
            this.izquierda.body.setVelocityY(300);
        } else if(this.cursor_W.isDown) {
             //esto hara que la pala derecha pueda ir hacia arriba
            this.izquierda.body.setVelocityY(-300);
        } else {
            //esto hara que la pala derecha se quede quieto si no se apreta la tecla W y la tecla S
            this.izquierda.body.setVelocityY(0);
        }
    }
    
    chocaPala() {
        //esto provocara que cuando choque con la pala, vaya en diferentes dirreccion la pelota
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}

export default EscenaPong;