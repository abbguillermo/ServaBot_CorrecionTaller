import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class UI extends Phaser.Scene
{
	
	private width=300
	private width2=0
	private barravida!:Phaser.GameObjects.Image
	private barrabasura!:Phaser.GameObjects.Image
	private btnclose?:Phaser.Physics.Matter.Sprite
	private tiempo!: number
	private temporizador:any
	private escenas:any
	private R!:number
	private sfxboton: any
	private sfxpower: any
	private sfxgancho: any

	constructor()
	{
		super({
			key: 'ui'
		})
	}

	init()
	{
	
	}

	create()
	{
		this.musicaysfx()

		this.tiempo=0
		this.width=300
		this.width2=0
		this.barravida=this.add.image(810,104,"vidallena")
		this.barravida.displayOriginX=0
		this.escenas=this.getLocal()
		this.barrabasura=this.add.image(575,50,"basurallena")
		this.barrabasura.displayOriginX=0
		let powerup1 = this.add.image(430, 970,"botonpower")
		let GanchoButton = this.add.image(1500, 970,"botongancho")
		.setInteractive()
		.on('pointerover', () => GanchoButton.setScale(1.1))
		.on('pointerout', () => GanchoButton.setScale(1))
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.sfxgancho.play()
			this.ganchobotn()
		});
		//.on("pointerdown",() => this.ganchobotn())
		let botonmute=this.add.image(25,30,"desmutear2")
		botonmute.setInteractive()
		.on('pointerover', () => botonmute.setScale(1.1))
		.on('pointerout', () => botonmute.setScale(1))
		botonmute.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
		events.emit("stopgameplay")
		
		let botonon=this.add.image(25,30,"mutear2")
		.setInteractive()
		botonon.on('pointerover', () => botonon.setScale(1.1))
		botonon.on('pointerout', () => botonon.setScale(1))
		botonon.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
			events.emit("playgameplay")
			botonon.destroy()
		})
    })


		let pausabtn=this.add.image(1900,30,"pausa")
		.setInteractive()
		.on('pointerover', () => pausabtn.setScale(1.1))
		.on('pointerout', () => pausabtn.setScale(1))
		pausabtn.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.sfxboton.play()
			this.scene.pause('nivel1');
			this.scene.pause("nivel2")
			this.scene.pause("ui")
			this.scene.launch('pausa');
		});
		events.on('descont-vida', this.descontar, this)
		events.on("sumar-basura",this.sumar,this)
		events.on("agarrado",this.agarrado,this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			
		})
		events.on("romper-boton",this.borrarBtn,this)
		
		events.on('descont-vida', this.descontar, this)
		events.on("sumar-basura",this.sumar,this)
		events.on("agarrado",this.agarrado,this)

		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			
		})
		events.on("romper-boton",this.borrarBtn,this)
		events.on("vida",this.masSalud,this)
		this.temporizador= this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });
		
		if(this.escenas==1){
			this.R=50 
		} else if(this.escenas==2){
			this.R=30 
		} else if(this.escenas==3){
			this.R=20 
		}

	}
	
	update(dt:number){
		console.log(this.tiempo)
		if(this.escenas==1){
		 if(this.tiempo==30){
				let power2 = this.add.image(425, 950,"power1")	
				.setInteractive()
				.on('pointerover', () => power2.setScale(1.1))
				.on('pointerout', () => power2.setScale(1))
				.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
			{
				this.sfxpower.play()
				events.emit("velocidad")
				//this.borrarBtn()
				let boton2 = this.matter.add.sprite(430, 970,"botonpower", undefined, {isStatic: true})
				.setInteractive()
				.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
				{
					this.nada()
				})
				this.tiempo=0
				
			});
			}
		} else if(this.escenas==2){
			if(this.tiempo==30){
				let power2 = this.add.image(430, 945,"power2")
				.on('pointerover', () => power2.setScale(1.1))
				.on('pointerout', () => power2.setScale(1))	
				.setInteractive()
				.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
			{
				this.sfxpower.play()
				events.emit("vida")
				//this.borrarBtn()
				let boton2 = this.matter.add.sprite(430, 970,"botonpower", undefined, {isStatic: true})
				.setInteractive()
				.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
				{
					this.nada()
				})
				this.tiempo=0
				
			});
			}
		} else if(this.escenas==3){
			if(this.tiempo==30){
				let power2 = this.add.image(430, 945,"power2")
				.on('pointerover', () => power2.setScale(1.1))
				.on('pointerout', () => power2.setScale(1))	
				.setInteractive()
				.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
			{
				this.sfxpower.play()
				events.emit("vida")
				//this.borrarBtn()
				let boton2 = this.matter.add.sprite(430, 970,"botonpower", undefined, {isStatic: true})
				.setInteractive()
				.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
				{
					this.nada()
				})
				this.tiempo=0
				
			});
			}
		}

		if(this.width>=0){
			this.barravida.displayWidth=this.width
		}
		if(this.width<=0){
		
			events.emit("pierde")
			this.scene.stop()
		}
		if(this.width2>=0){
			
			this.barrabasura.displayWidth=this.width2
		}
		if(this.width2>=850){
			events.emit("gana")
			this.scene.stop()
		}

	}	

	private ganchobotn(){
		
		events.emit('bajar')
		this.btnclose = this.matter.add.sprite(1500, 970,"botonclose", undefined, {isStatic: true})
		.setInteractive()
		.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
			this.nada()
		});
		//.on("pointerdown",() => this.nada());
	}

	private nada(){
		//No tocar!! 
	}

	private borrarBtn(){
		
		this.btnclose?.destroy();
	}

	private descontar(){
		this.width=this.width-30
	}

	private sumar(){
		
		this.width2=this.width2+this.R
	}

	masSalud(){
		if(this.width<300){
			this.width=this.width+60
		}
	}

	agarrado(){
		this.scene.pause('nivel1');
		this.scene.launch('especies');
	}

	cadaSegundo(){
		this.tiempo = this.tiempo! + 1
	}

	getLocal(){
		return localStorage.getItem('NivelDesbolqueado') || '1';
	}

	musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
		this.sfxpower = this.sound.add("sonidopower", {volume: 0.3});
		this.sfxgancho = this.sound.add("sonidogancho", {volume: 0.3});
	}

	
}