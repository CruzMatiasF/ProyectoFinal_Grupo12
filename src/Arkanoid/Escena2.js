import Phaser from "phaser";
import {Scoreboard} from "./ScoreBoard.js";

class Escena extends Phaser.Scene{ 
    constructor(config) {
        super({ key : "Escena"});

        this.config=config; 
        this.lvl2
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
        this.load.image("base","img/plataforma.png")
        this.load.image("pelota","img/pelota.png")
        this.load.image("bluebrick","img/brickBlue.png ");
        this.load.image("blackbrick","img/brickBlack.png");
        this.load.image("greenbrick","img/brickGreen.png");
        this.load.image("orangebrick","img/brickOrange.png");
    }
    
    create(){ 
        //añadimos un fondo al juego
        this.add.image(400,300,"fondo");
        //le añadimos esto para que colisione solamente en la parte superior menos en la inferior, por eso el ultimo es false
        this.physics.world.setBoundsCollision(true,true,true,false);
        //esto creara el scoreboard
        this.scoreboard.create();
        
        //añadimos los ladrillos por grupo
        this.bricks=this.physics.add.staticGroup({
            //esto vendria a ser los nombre de los ladrillos que elegimos
            key:["bluebrick","orangebrick","greenbrick","blackbrick"],
            //elegimos cuantos ladrillos van por fila, en este caso son 10 por fila
            frameQuantity:10,
            gridAlign:{
                //tiene un ancho
                width:10,
                //tiene un alto
                height:4,
                //ancho de cada casilla
                cellWidth:67,
                //alto de cada casilla
                cellHeight:34,
                //posicion inicial de los ladrillos
                x:112,
                //posicion inicial de los ladrillos
                y:100,
            }     
        });
        //le añadimos una plataforma y tambien le agregamos el setImmovable para cada que vez que colisione se quede en el mismo lugar
        this.platforms = this.physics.add.image(400,500,"base").setImmovable();
        //y le quitamos la gravedad, para que no se vaya para abajo
        this.platforms.body.allowGravity=false;
        
        //creamos la pelota y le añadimos una imagen y le damos una posicion
        this.pelota=this.physics.add.image(385,430,"pelota");
        //esto hara que cuando empezamos la partida la pelota este "pegada" a la plataforma
        this.pelota.setData("glue",true);
        //esto hara que pueda colisionar con todos los bordes salvo el de la parte inferior
        this.pelota.setCollideWorldBounds(true);
        
        //le añadimos colisiones tanto a la pelota como a la plataforma una vez impacten
        this.physics.add.collider(this.pelota,this.platforms,this.platformImpact,null,this);
        //le añadimos colisiones tanto a la pelota como a los ladrillos  una vez impacten
        this.physics.add.collider(this.pelota,this.bricks,this.brickImpact,null,this);

        this.pelota.setBounce(1);

        this.cursors=this.input.keyboard.createCursorKeys();
        
    }
    update(){
        //este es el movimiento hacia la izquierda
        if(this.cursors.left.isDown){
            //le damos esta velocidad para arrancar el juego
            this.platforms.setVelocityX(-300);
            //esto provocara que si la plataforma se mueva a la izquierda, la pelota tambien lo hara
            if (this.pelota.getData("glue")){
                this.pelota.setVelocityX(-300);
            }
        }
        //este es el movimiento hacia la derecha
        else if(this.cursors.right.isDown){
            //le damos esta velocidad para arrancar el juego
            this.platforms.setVelocityX(300);
            //esto provocara que si la plataforma se mueva a la derecha, la pelota tambien lo hara
            if (this.pelota.getData("glue")){
                this.pelota.setVelocityX(300);
            }
        }
        //esto es cuando nos quedamos quietos con la plataforma
        else {this.platforms.setVelocityX(0);
            //esto provocara que si la plataforma se queda quieta, la pelota tambien lo hara
            if (this.pelota.getData("glue")){
                this.pelota.setVelocityX(0);
            }
        }
        //cuando la pelota salga de este rango perderemos el juego
        if (this.pelota.y > 650 ){
            console.log("fin");
            //y esto nos mostrara el mensaje de gameover y el boton para reiniciar el nivel
            this.showGameOver();
        }
        //iniciaremos el juego apretando la flecha de arriba
        if (this.cursors.up.isDown){
            //la pelota iniciara en una velocidad distinta
            this.pelota.setVelocity(-75,-300);
            //aca cuando iniciamos el juego la pelota ya no estara "pegada"
            this.pelota.setData("glue",false);
        }
    }
    
    //
    platformImpact(pelota,platform){
        //esto sumara un punto cada vez que la pelota choque con la plataforma
        this.scoreboard.incrementPoints(1);
        //esto guarda la posicion relativa de la plataforma como de la pelota 
        let relativeImpact = pelota.x-platform.x;
        console.log(relativeImpact);
        //miramos si la el reltiveImpact a caido muy cercano a 0  
        if(relativeImpact < 0.1 && relativeImpact > -0.1){
            //ajustamos la velocidad de la velocidad de la pelota sea aleatoria y esto lo hara el between dentro de un intervalo 
            pelota.setVelocityX(Phaser.Math.Between(-10,10))
        } else {
            //haremos que la pelota vaya de un lado a otro
            pelota.setVelocityX(10*relativeImpact);
        }
    }
    //esto provocara la colision entre la pelota y los ladrillos
    brickImpact(pelota,brick){
        //cada vez que la pelota choque con un ladrillo el ladrillo se destruira
        brick.disableBody(true,true);
        // y cada vez que destruya se le otorgara 10 puntos por lada ladrillo destruido
        this.scoreboard.incrementPoints(10);
        //si todo el grupo de los ladrillos son destruidos o es igual a 0
        if (this.bricks.countActive()===0){
            //esto nos mostrara un cartel que nos dira que ganamos el juego
            this.showCongratulations();
        }
    } 
    //esto nos mostrara cada vez que perdamos en el juego
    showGameOver(){
        this.scene.start("gameover");
    }
    //esto hara lo mismo pero cuando ganemos
    showCongratulations(){
        this.scene.start("congratulations");
    }
    

}export default Escena;