class Palas extends Phaser.GameObjects.Sprite {
    //instanciamos las palas
    constructor(scene, x, y, type) {
        super(scene, x, y, type);
        //cuano se cree este objeto, hacemos que sea existente en el plano 
        scene.add.existing(this);
        //le agregamos fisicas a las palas
        scene.physics.world.enable(this);
        //le ponemos a las palas que sean inamovibles 
        this.body.immovable = true;
        //esto permite que las palas choquen con el limite del lienzo y se detengan
        this.body.setCollideWorldBounds(true);
    }
}

export default Palas;