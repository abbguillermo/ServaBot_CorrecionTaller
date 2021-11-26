import Phaser, { Physics, Tweens } from 'phaser'
import StateMachine from '~/statemachine/StateMachine'
import { sharedInstance as events } from './EventCenter'

export default class FishController extends Phaser.Scene {

    private Scene?:Phaser.Scene
    private pez!:Phaser.Physics.Matter.Sprite
    private TipoPez?:string
    private tamañopez!:number
    private stateMachine!: StateMachine
    private escenas:any
    private tiempomov=0
    private Y=0
   
	constructor(scene:Phaser.Scene,pez:Phaser.Physics.Matter.Sprite,tipoPez:string)
	{
		super('fishcontroller')

        this.Scene= scene
        this.pez= pez
        this.TipoPez= tipoPez
        this.tamañopez=1
        this.stateMachine = new StateMachine(this, 'fishes')
        this.escenas=this.getLocal()
        if(this.escenas==1){
            this.tamañopez=1
        } else if (this.escenas==2){
            this.tamañopez=0.7
        }

        this.pez.setFriction(0,0)
        this.pez.setScale(this.tamañopez)
        this.pez.setVelocityX(Phaser.Math.Between(-3,-5))
        this.pez.setVelocityY(this.Y)
        this.pez.setIgnoreGravity(true)
    
        /////// seteo de información /////////

        this.pez.setDataEnabled()
        this.pez.data.set('levantado', "peces");
        this.pez.data.set('tipo',tipoPez);
        this.pez.setData('colisionando',false);
       
        events.on("cambio",this.cambiovelocidad,this)
       
	}
    

    update(dt:number){
		this.stateMachine.update(dt)

    }
    
    getLocal(){
        return localStorage.getItem('NivelDesbolqueado') || '1';
    }

  cambiovelocidad(){
      this.pez.setVelocityX(Phaser.Math.Between(-10,-15))
  }
}