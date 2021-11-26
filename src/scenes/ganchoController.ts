import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
import RobotController from './robotController'
import StateMachine from '../statemachine/StateMachine'
import FishController from './FishController'
import ObstaculosController from './ObstaculosController'
import BasuraController from './BasuraController'

export default class GanchoController {

	private scene?: Phaser.Scene
	private sprite!: Phaser.Physics.Matter.Sprite	
	private stateMachine!: StateMachine
	private escenas:any
	private tiempomov=0

	private obstacles?: ObstaculosController
	
	//private boton: any
	//	private stateMachine: StateMachine
	private velocidad!:number

	constructor(scene: Phaser.Scene, sprite: Phaser.Physics.Matter.Sprite,obstacles: ObstaculosController) {		
		/* cuando lo creamos lo hacemos asi:*/

	
		this.velocidad=5
	
		this.scene = scene
		this.sprite = sprite
		this.obstacles = obstacles
		this.stateMachine = new StateMachine(this, 'grip')
		this.sprite.setIgnoreGravity(true)
		
	
		this.createAnimations()

		this.stateMachine.addState("arriba",{
			onEnter: this.arribaOnEnter,
		})

		
		this.stateMachine.addState('abierto', {
			onEnter: this.abiertoOnEnter,
		})

		.addState('cerrado', {
			onEnter: this.cerradoOnEnter,
		})
		.addState('bajando', {
			onUpdate: this.bajandoOnUpdate,
		})
	/*	.addState("derecha",{
			onEnter:this.derechaOnEnter,
			onUpdate:this.derechaOnUpdate,
		})
		.addState("izquierda",{
			onEnter:this.izquierdaOnEnter,
			onUpdate:this.izquierdaOnUpdate,
		})*/
		
		
		
		this.sprite.setOnCollide((data: MatterJS.ICollisionPair) => {
			const body = data.bodyB as MatterJS.BodyType

			
		

			const gameObject = body.gameObject
			if (!gameObject)
			{
				return
			}

			if (gameObject instanceof Phaser.Physics.Matter.Sprite)
			{
		    if (body){
					
					events.emit("subir")
					
				} 
			}
					
		
			const spriteDelete = gameObject as Phaser.Physics.Matter.Sprite
			const type = spriteDelete.getData('levantado')
			
			if(!type){
				return
			}
		
			switch (type)
			{
				case 'basura':
				{
					spriteDelete.destroy()
					events.emit("bien")
					events.emit("sonidoBasura")
					events.emit("sumar-basura")
					break
				}

				case 'peces':
				{
					//sprite.destroy()
					events.emit("mal")
					events.emit("sonidoPez")
					events.emit("descont-vida")
					events.emit("cambio")
					break
				}
			}
			
		})

	
		events.on("bajar",this.baja,this)
		events.on("subir",this.sube,this)	
		events.on("velocidad",this.cambio,this)
	}

	/*create(){
		events.on("mover",this.moviendoseOnUpdate,this)

	}*/

	update(dt: number)
	{
		this.stateMachine.update(dt)
	}

	private arribaOnEnter()
	{
		this.sprite.setVelocityY(-7)
		this.stateMachine.setState("derecha")
	}	
	
	private abiertoOnEnter()
	{
		this.sprite.play('grip-open')
		this.stateMachine.setState("derecha")
		
	}

	private cerradoOnEnter()
	{
		this.sprite.play('grip-close')
	}
	
	public bajandoOnUpdate()
	{
		
		this.sprite.setVelocityY(this.velocidad);
		/*this.sprite.setIgnoreGravity(false)*/
		/*this.scene.tweens.add({
      targets: [ this.sprite],
      x:2100,
      duration: 21000,
      ease: 'Sine.easeInOut',
      flipX: false,
      yoyo: true,
      repeat: -1,
      delay: function (target, key, value, targetIndex) {
        return targetIndex * 1000;
      }
		});*/
	}
/*	private derechaOnEnter()
	{
		this.tiempomov = 0
		
	}

	private derechaOnUpdate(dt:number)
	{
		this.tiempomov+=dt
		this.sprite.setVelocityX(-3)
		if (this.tiempomov > 2000)
		{
			this.stateMachine.setState('izquierda')
		}
	}

	private izquierdaOnEnter()
	{
		this.tiempomov=0
		
	}

	private izquierdaOnUpdate(dt:number)
	{
		this.tiempomov+=dt
		this.sprite.setVelocityX(3)
		if (this.tiempomov > 2000)
		{
			this.stateMachine.setState('derecha')
		}
	}*/
	
	private createAnimations()
	{
		this.sprite.anims.create({
			key: 'grip-open',
			frames: [{ key: 'ganchopunta'}]
		})

		this.sprite.anims.create({
			key: 'grip-close',
			frames: [{ key: 'ganchocerrado'}]
		})
	}
	
	private baja(){
		this.stateMachine.setState("bajando")
	}

	private sube(){
		this.stateMachine.setState("arriba")
	}

	private cambio(){
		this.velocidad=10
		setTimeout(() => {
			this.velocidad=5
		}, 15000);
	}
		
}