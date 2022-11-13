import Phaser from "phaser";

export class Scoreboard{
    constructor(scene){
        //guardamos en esta propiedad la escena
        this.relatedScene=scene;
        //esto hara que empezemos con el marcador a 0
        this.score=0;
    }


    create(){
        //le añadimos tanto donde esta posicionado el puntaje como el cambio de las letras y le añadimos un color
        this.scoreText=this.relatedScene.add.text(16,16,"puntos:0",{
            fontSize:"20px",
            fill:"#fff",
            fontFamily:"verdana,arial,sans-serif"
        });
    }
    
    //esto incrementara los puntos una vez la pelota colisione con los ladrillos  y le iran sumando un punto al jugador por cada rebote de pelota que haga
    incrementPoints(points){
        //incrementa los puntos en la propiedad score|
        this.score+=points;
        //hacemos que el scoretext sume los puntos mientras estemos jugando
        this.scoreText.setText("puntos:"+this.score);
    }
}