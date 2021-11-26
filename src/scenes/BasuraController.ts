import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class BasuraController extends Phaser.Scene {

    private Scene?:Phaser.Scene
    private Basura?:Phaser.Physics.Matter.Sprite
    private TipoBasura?:string
   

	constructor(scene:Phaser.Scene,basura:Phaser.Physics.Matter.Sprite,tipoBasura:string)
	{
		super('basuracontroller')

        this.Scene=scene
        this.Basura=basura
        this.TipoBasura=tipoBasura
       // this.Basura.setVelocityX(1)

        this.Basura.setFriction(0,0)
        this.Basura.setScale(1)
        this.Basura.setVelocityX(Phaser.Math.Between(3,5))
        this.Basura.setIgnoreGravity(true)
        this.Basura.setRotation(Phaser.Math.Between(1,5))
        /////// seteo de información /////////

        this.Basura.setDataEnabled()
        this.Basura.data.set('levantado', "basura");
        this.Basura.data.set('tipo',tipoBasura);
        this.Basura.setData('colisionando',false);

        this.Basura.data.set('seleccionado',false)// si esta seleccionado 

        events.on("romper",this.romper,this)
	}
        
    private romper(){
        this.Basura?.destroy()
    }
}
