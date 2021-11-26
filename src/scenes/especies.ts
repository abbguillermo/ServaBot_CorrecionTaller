import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'
import FishespController from './FishespController'
export default class galeria extends Phaser.Scene {

  private pez?:number
  private imagen1!:Phaser.GameObjects.Image
  private imagen2!:Phaser.GameObjects.Image
  
  constructor() {
    super('especies');
  }

  create(){
    
    this.add.image(960, 540, "fondomenu");
    this.add.image(960,520,"especies");
    
    var botonok=this.add.image(960,960,"ok")
    botonok.setInteractive()
    botonok.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
    {
      this.scene.stop();
      this.scene.resume('nivel1');
        
    });
    
  } 

  update(){

  }

  
}