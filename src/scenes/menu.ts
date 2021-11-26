import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter';

export default class menu extends Phaser.Scene {

  private musicmenu: any
  private musicaestado:any
	private sfxboton: any

  constructor() {
    super('inicio');
  }
  
  create() {
   //this.setNivel()
   

    this.musicaysfx()

    this.musicmenu.play()
 
    var fondo=this.add.image(960, 540,"fondomenu");
    var logo=this.add.image(1200, 500,"logo");
    this.add.image(100, 530,"extensionesbot");
   
    //boton jugar
    var botonjugar=this.add.image(400,290,"botonJugar")
    botonjugar.setInteractive()
    .on('pointerover', () => botonjugar.setScale(1.1))
		.on('pointerout', () => botonjugar.setScale(1))
    botonjugar.on('pointerdown', () => this.scene.launch('instrucciones') && this.sfxboton.play())
    
    //boton intruccciones
    var botonins=this.add.image(400,550,"botonInstrucciones")
    botonins.setInteractive()
    .on('pointerover', () => botonins.setScale(1.1))
		.on('pointerout', () => botonins.setScale(1))
    botonins.on('pointerdown', () => this.scene.launch('instrucciones') && this.sfxboton.play())
   
    //boton galeria
    var botonGal=this.add.image(400,785,"galery")
    botonGal.setInteractive()
    .on('pointerover', () => botonGal.setScale(1.1))
		.on('pointerout', () => botonGal.setScale(1))
    botonGal.on('pointerdown', () => this.scene.start('galery') && this.sfxboton.play())

    //boton creditos
    var botonCreditos=this.add.image(1860,1020,"creditosmenu")
    botonCreditos.setInteractive()
    .on('pointerover', () => botonCreditos.setScale(1.1))
		.on('pointerout', () => botonCreditos.setScale(1))
    botonCreditos.on('pointerdown', () => this.scene.launch('creditos') && this.sfxboton.play())

    //boton ajustes
    var botonAjust=this.add.image(1860,60,"settingsmenu")
    botonAjust.setInteractive()
    .on('pointerover', () => botonAjust.setScale(1.1))
		.on('pointerout', () => botonAjust.setScale(1))
    botonAjust.on('pointerdown', () => this.scene.launch('ajustes') && this.sfxboton.play())
    
    events.on("stopmenu", this.musicstop,this)
    events.on("playmenu",this.musicplay,this)
  }

  musicaysfx(){    
    this.musicmenu = this.sound.add("musicmenu", {volume: 0.5, loop: true});
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}

  musicstop(){
    this.musicmenu.pause()
  }
  musicplay(){
    this.musicmenu.resume()
  }
}
 