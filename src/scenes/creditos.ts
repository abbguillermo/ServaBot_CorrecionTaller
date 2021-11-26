import Phaser from 'phaser'
export default class creditos extends Phaser.Scene {

  private sfxboton: any

  constructor() {
    super('creditos');
  }

  create(){
    this.musicaysfx()

    this.add.image(960,540,"fondomenu")
    this.add.image(960,540,"creditos")

    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    .on('pointerover', () => botonvolver.setScale(1.1))
		.on('pointerout', () => botonvolver.setScale(1))
    botonvolver.on('pointerdown', () => this.scene.stop() && this.sfxboton.play())

  }

  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}
   
}