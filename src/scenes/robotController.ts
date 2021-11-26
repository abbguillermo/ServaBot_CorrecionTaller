import Phaser, { Physics, Tweens } from 'phaser'
import StateMachine from '../statemachine/StateMachine'
import { sharedInstance as events } from './EventCenter'
import GanchoController from './ganchoController'

export default class RobotController {

	private scene!: Phaser.Scene
	private sprite!: Phaser.Physics.Matter.Sprite
	private gancho?: GanchoController
	private escenas:any
	private stateMachine: StateMachine

	constructor(scene: Phaser.Scene, sprite: Phaser.Physics.Matter.Sprite,  gancho: GanchoController) {		
		
		this.scene = scene
		this.sprite = sprite
		
		
		this.gancho = gancho
		

		this.createAnimations()

		this.stateMachine = new StateMachine(this, 'player')
	

		this.stateMachine.addState('feliz', {
			onEnter: this.felizOnEnter,
			onUpdate:this.felizOnUpdate,
		})
		.addState('triste', {
			onEnter: this.tristeOnEnter,
		})
		.addState('concentrado', {
			onEnter: this.concentradoOnEnter,
		})
		.addState('bien', {
			onEnter: this.bienOnEnter
		})
		.addState('mal', {
			onEnter: this.malOnEnter
		})
		.setState("feliz")
		
		this.escenas=this.getLocal()
		if(this.escenas==2){
			
		
			
		}
		
		this.sprite.setFriction(0,0)
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

					this.stateMachine.setState("feliz")
					
					events.emit("romper-boton")
					
					
				} 
				
				
			}
	
		})
		events.on("bajar",this.baja,this)
		events.on("mal",this.mal,this)
		events.on("bien",this.bien,this)
		
	}

	update(dt: number)
	{
		this.stateMachine.update(dt)
	}

	private felizOnEnter()
	{
		this.sprite.play('player-feliz')
	}

	private felizOnUpdate()
	{
		
	}

	private tristeOnEnter()
	{
		this.sprite.play('player-triste')
	}


	private concentradoOnEnter()
	{
		this.sprite.play('player-concentrado')
		this.sprite.isStatic
	}

	private bienOnEnter()
	{
		this.sprite.play('player-bien')
		this.sprite.isStatic
	}

	private malOnEnter()
	{
		this.sprite.play('player-mal')
	}


	
	private createAnimations()
	{
		this.sprite.anims.create({
			key: 'player-feliz',
			frames: [{ key: 'personaje'}]
		})

		this.sprite.anims.create({
			key: 'player-triste',
			frames: [{ key: 'personajetriste'}]
		})

		this.sprite.anims.create({
			key: 'player-concentrado',
			frames: [{ key: 'personajeconc'}]
		})

		this.sprite.anims.create({
			key: 'player-bien',
			frames: [{ key: 'personajebien'}]
		})

		this.sprite.anims.create({
			key: 'player-mal',
			frames: [{ key: 'personajemal'}]
		})
		
	}

	private baja(){
		this.stateMachine.setState("concentrado")
	}

	private mal(){
		this.stateMachine.setState("mal")
	}

	private bien(){
		this.stateMachine.setState("bien")
	}

	getLocal(){
		return localStorage.getItem('NivelDesbolqueado') || '1';
	}

}
