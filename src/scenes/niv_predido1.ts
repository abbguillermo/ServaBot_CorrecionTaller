import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class nivperd1 extends Phaser.Scene {

  private sfxboton: any
  private musicaperdido: any

  constructor() {
    super('niv-perdido2');
  }

  create(){

    this.musicaysfx()
    this.musicaperdido.play()

    this.add.image(960, 540, "fondowin");
    this.add.image(960,540,"general")
    
    const txtperdido = this.add.text(400,230, getPhrase("NIVEL PERDIDO"), {
      align: "center",
      fontSize: "150px",
      fontFamily: "ArialRoundedMTBold"
    });

    var btnreset=this.add.image(510,580,"reintentar")
    btnreset.setInteractive()
    .on('pointerover', () => btnreset.setScale(1.1))
		.on('pointerout', () => btnreset.setScale(1))
    btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
      this.musicaperdido.stop()
			this.scene.stop();   
      this.scene.stop("nivel2");
      events.removeAllListeners()
			this.scene.launch("nivel2");
		});

    

    var btnmenu=this.add.image(1400,580,"menu").setScale(1.2)
    btnmenu.setInteractive()
    .on('pointerover', () => btnmenu.setScale(1.1))
		.on('pointerout', () => btnmenu.setScale(1))
    btnmenu.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
      this.musicaperdido.stop()
      localStorage.setItem('NivelDesbolqueado',"2");
			//this.scene.stop("nivel1");
      //this.scene.stop("ui");
      this.scene.stop("fondo")
      events.removeAllListeners()
			this.scene.start('inicio');
		});
  } 

  musicaysfx(){
    this.musicaperdido = this.sound.add("musiclost", {volume: 0.5, loop: true});
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}
  
}