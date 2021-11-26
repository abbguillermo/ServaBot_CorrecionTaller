import { Events } from 'matter';
import Phaser from 'phaser'
import { getPhrase } from '~/services/translations'
import { sharedInstance as events } from './EventCenter'

export default class pausa extends Phaser.Scene {
 
  private escenas:any
  private sfxboton: any

  constructor() {
    super('pausa');
  }

  create(){

    this.musicaysfx()

    this.escenas=this.getLocal()
    this.add.image(960, 540, "fondowin");
    this.add.image(960,540,"general")

    const txtpausa = this.add.text(690,230, getPhrase("PAUSA"), {
      align: "center",
      fontSize: "150px",
      fontFamily: "ArialRoundedMTBold"
    });
    
  /*  var btnreset=this.add.image(410,580,"reintentar")
    btnreset.setInteractive()
    btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      events.removeAllListeners()
			this.scene.stop();
      this.scene.stop("nivel1")
			this.scene.launch('nivel1');

		});*/
    if(this.escenas==1){
      var btnreset=this.add.image(410,580,"reintentar")
      btnreset.setInteractive()
      .on('pointerover', () => btnreset.setScale(1.1))
      .on('pointerout', () => btnreset.setScale(1))
      btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        events.emit("stopgameplay")
        events.removeAllListeners()
        this.scene.stop();
        this.scene.stop("nivel1")
        this.scene.launch('nivel1');

      });
    }
    if(this.escenas==2){
      var btnreset=this.add.image(410,580,"reintentar")
      btnreset.setInteractive()
      .on('pointerover', () => btnreset.setScale(1.1))
      .on('pointerout', () => btnreset.setScale(1))
      btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        events.emit("stopgameplay")
        events.removeAllListeners()
        this.scene.stop();
        this.scene.stop("nivel2")
        this.scene.launch('nivel2');

      });
    }
    if(this.escenas==3){
      var btnreset=this.add.image(410,580,"reintentar")
      btnreset.setInteractive()
      .on('pointerover', () => btnreset.setScale(1.1))
      .on('pointerout', () => btnreset.setScale(1))
      btnreset.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        events.emit("stopgameplay")
        events.removeAllListeners()
        this.scene.stop();
        this.scene.stop("nivel3")
        this.scene.launch('nivel3');

      });
    }

    var btnresume=this.add.image(1480,580,"botonJugar")
    btnresume.setInteractive()
    .on('pointerover', () => btnresume.setScale(1.1))
		.on('pointerout', () => btnresume.setScale(1))
    btnresume.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
      this.sfxboton.play()
      this.scene.stop();
      this.scene.resume('nivel1');
      this.scene.resume('nivel2');
      this.scene.resume("ui")
    });

    var btnmenu=this.add.image(940,715,"menu")
    btnmenu.setInteractive()
    .on('pointerover', () => btnmenu.setScale(1.1))
		.on('pointerout', () => btnmenu.setScale(1))
    btnmenu.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
      this.sfxboton.play()
      events.emit("stopgameplay")
      events.removeAllListeners()
      this.scene.stop();
      this.scene.stop("nivel1")
      this.scene.stop("nivel2")
      this.scene.stop("nivel3")
      this.scene.stop("fondo")
      this.scene.stop("ui")
      this.scene.start('inicio');
    });
   
  
  } 

  getLocal(){
    return localStorage.getItem('NivelDesbolqueado') || '1';
  }
  
  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}
}