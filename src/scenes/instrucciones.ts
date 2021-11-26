import Phaser from 'phaser'

export default class instrucciones extends Phaser.Scene {

  private sfxboton: any

  constructor() {
    super('instrucciones');
  }

  create(){

    this.musicaysfx()
      
    this.add.image(960, 540, "fondomenu");
    this.add.image(960,500,"instrucciones")
    
    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    .on('pointerover', () => botonvolver.setScale(1.1))
		.on('pointerout', () => botonvolver.setScale(1))
    botonvolver.on('pointerdown', () => this.scene.stop() && this.sfxboton.play())

    var botonjugar=this.add.image(1730,980,"botonJugar").setScale(0.7)
    botonjugar.setInteractive()
    .on('pointerover', () => botonjugar.setScale(0.8))
		.on('pointerout', () => botonjugar.setScale(0.7))
    botonjugar.on('pointerdown', () => this.scene.start('seleccion') && this.sfxboton.play())
  
  } 
  
  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}

}