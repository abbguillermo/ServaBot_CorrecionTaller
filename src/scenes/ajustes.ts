import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
export default class galeria extends Phaser.Scene {

  private sfxboton: any

  constructor() {
    super('ajustes');
  }

  create(){

    this.musicaysfx()

    this.add.image(960, 540, "fondomenu");
    this.add.image(960,480,"ajustes");
    
    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    .on('pointerover', () => botonvolver.setScale(1.1))
		.on('pointerout', () => botonvolver.setScale(1))
    botonvolver.on('pointerdown', () => this.scene.stop() && this.sfxboton.play())
    let botonmute=this.add.image(660,600,"desmutear")
    botonmute.setInteractive()
    .on('pointerover', () => botonmute.setScale(1.1))
		.on('pointerout', () => botonmute.setScale(1))
    botonmute.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.sfxboton.play()
      events.emit("stopmenu")
      
      let botonon=this.add.image(660,600,"mutear")
      .setInteractive()
      botonon.on('pointerover', () => botonon.setScale(1.1))
	  	botonon.on('pointerout', () => botonon.setScale(1))
      botonon.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
        events.emit("playmenu")
        botonon.destroy()
      })
    })
    let btnidiom=this.add.image(1260,600,"btnidioma")
    .setInteractive()
    .on('pointerover', () => btnidiom.setScale(1.1))
		.on('pointerout', () => btnidiom.setScale(1))
    btnidiom.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.sfxboton.play()
      events.emit("stopmenu")
      this.scene.stop("inicio")
      this.scene.start("idiomas")
    })
  } 

  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}
}