import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class nivganado3 extends Phaser.Scene {

  private sfxboton: any
  private musicaganado: any

  constructor() {
    super('niv-ganado3');
  }

  create(){
    this.musicaysfx()
    this.musicaganado.play()
      
    this.add.image(960, 540, "fondowin");
    this.add.image(960,540,"general")

    const txtganado = this.add.text(400,240, getPhrase("BUEN TRABAJO"), {
      align: "center",
      fontSize: "150px",
      fontFamily: "ArialRoundedMTBold"
    });
    
    var btnreset=this.add.image(410,580,"reintentar")
    btnreset.setInteractive()
    .on('pointerover', () => btnreset.setScale(1.1))
		.on('pointerout', () => btnreset.setScale(1))
    btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
      this.musicaganado.stop()
			this.scene.stop();   
      this.scene.stop("nivel3");
      events.removeAllListeners()
			this.scene.launch("nivel3");
		});

    var btnsig=this.add.image(1480,580,"siguiente")
    btnsig.setInteractive()
    .on('pointerover', () => btnsig.setScale(1.1))
		.on('pointerout', () => btnsig.setScale(1))
    btnsig.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
      this.musicaganado.stop()
      this.scene.stop()
      this.scene.stop("nivel3");
      events.removeAllListeners()
      localStorage.setItem('NivelDesbolqueado',"3");
      this.scene.stop("fondo")
			this.scene.start('creditos');
		});

    var btnmenu=this.add.image(940,715,"menu")
    btnmenu.setInteractive()
    .on('pointerover', () => btnmenu.setScale(1.1))
		.on('pointerout', () => btnmenu.setScale(1))
    btnmenu.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
      this.musicaganado.stop()
      localStorage.setItem('NivelDesbolqueado',"3");
			//this.scene.stop("nivel1");
      //this.scene.stop("ui");
      this.scene.stop("fondo")
      events.removeAllListeners()
			this.scene.start('inicio');
		});
  } 
  
  musicaysfx(){
    this.musicaganado = this.sound.add("musicwin", {volume: 0.5, loop: true});
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}
}