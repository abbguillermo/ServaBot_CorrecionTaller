import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'
export default class Sniv extends Phaser.Scene {
  
  private escenas:any
  private fondomenu: any
  private sfxboton: any

  constructor() {
    super('seleccion');
  }

  create (){

    this.musicaysfx()

    this.escenas=this.getLocal()
    
    this.fondomenu = this.add.image(960, 540,"fondomenu");

    this.add.image(960,540,"niveles")
    this.add.image(960,640,"nivelblock")
    this.add.image(1340,640,"nivelblock")

    // const txtlimpiar = this.add.text(this.fondomenu.displayWidth/5,275, getPhrase("A LIMPIAR"))
    // txtlimpiar.setFontSize(1500)
    // txtlimpiar.setFont("Sans Serif")
    const txtlimpiar = this.add.text(550,275, getPhrase("A LIMPIAR"), {
      align: "center",
      fontSize: "150px",
      fontFamily: "ArialRoundedMTBold"
    });

    //botn LVL 1
    var niv1=this.add.image(580,640,"niv1")
    niv1.setInteractive()
    .on('pointerover', () => niv1.setScale(1.1))
		.on('pointerout', () => niv1.setScale(1))
    niv1.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
      this.sfxboton.play() 
      localStorage.setItem("musica","1")
      localStorage.setItem("NivelDesbolqueado","1")
      this.scene.start("nivel1")
    })

   
    if(this.escenas>=2){
      var niv2=this.add.image(960,640,"niv2")
      niv2.setInteractive()
      .on('pointerover', () => niv2.setScale(1.1))
      .on('pointerout', () => niv2.setScale(1))
      niv2.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        events.emit("stopmenu")
        localStorage.setItem("NivelDesbolqueado","2")
        this.scene.start("nivel2")
      })
    }
    
    if(this.escenas>=3){
      var niv3=this.add.image(1340,640,"niv3")
      niv3.setInteractive()
      .on('pointerover', () => niv3.setScale(1.1))
      .on('pointerout', () => niv3.setScale(1))
      niv3.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        events.emit("stopmenu")
        localStorage.setItem("NivelDesbolqueado","3")
        this.scene.start("nivel3")
      })
    }
    
    
    var botonvolver=this.add.image(80,1030,"volver")
    botonvolver.setInteractive()
    .on('pointerover', () => botonvolver.setScale(1.1))
		.on('pointerout', () => botonvolver.setScale(1))
    botonvolver.on('pointerdown', () => this.scene.stop() && this.sfxboton.play())
  }

  update (){
  
  }

  getLocal(){
    return localStorage.getItem('NivelDesbolqueado') || '1';
  }

  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}

}
