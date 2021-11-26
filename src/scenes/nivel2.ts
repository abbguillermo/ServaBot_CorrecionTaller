import Phaser, { GameObjects } from 'phaser'
import GanchoController from './ganchoController';
import RobotController from './robotController';
import FishController from './FishController';
import FishespController from './FishespController';
import BasuraController from './BasuraController';
import ObstaculosController from './ObstaculosController';
import { sharedInstance as events } from './EventCenter';

export default class nivel_2 extends Phaser.Scene {
  
  private robot?:Phaser.Physics.Matter.Sprite
  private ganchos?:Phaser.Physics.Matter.Sprite
  private gancho?:any
  private pared?:Phaser.Physics.Matter.Sprite
  private temporizador?:any
  private tiempo?:number
  private tiempoBasura?:number
  private basuraRandom?:number
  private objbasura?:any
  private objpez?: any
  private objpezesp?:any
  private piso?:Phaser.Physics.Matter.Sprite
  private robotController?:RobotController
  private ganchoController?:GanchoController
  private fishcontroller?:any
  private basuracontroller:any
  private fishespcontroller?:any
  public btnclose:any
  private Click?:Phaser.Physics.Matter.Sprite
  private obstacles!: ObstaculosController
  private sfxtilde:any
  private sfxcruz: any
  private sfxbarco:any
  private sfxpopup:any
  private musicagameplay:any
  private cuentalibrito?: number

  constructor() {
    super('nivel2');
    
  }

  init(){
    this.obstacles = new ObstaculosController()
    
  }

  
  create(){

    this.musicaysfx()
    this.musicagameplay.play()
    setTimeout(() => {
      this.sfxbarco.play()
    }, 28000);

    this.scene.launch('ui')
    this.piso= this.matter.add.sprite(960,990,"piso",undefined,{isStatic:true})
    this.piso.setData("tipo","borde")
  
    this.add.image(960, 540, "recuadro")
    this.scene.launch('fondo')
    this.tiempo=0
    this.tiempoBasura=0
   
    
    this.add.image(960, 40, "barrageneral");
    this.add.image(1000, 49, "barrabasura");
    this.add.image(960, 105, "barravida");

    //paredes invisibles
    var worldWidth = 1920;
    var worldHeight = 1080;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight);
  
    this.matter.world.setBounds(0,100,1900,0)

    events.on("sonidoBasura",this.tilde,this)
    events.on("sonidoPez",this.cruz,this)
    events.on("stopgameplay", this.musicstop,this)
    events.on("playgameplay",this.musicplay,this)

    //contolador gancho
    this.gancho = this.matter.add.sprite(960, 330, 'ganchopunta')
    this.gancho.setFixedRotation()  
    this.gancho.setIgnoreGravity(true)
    
    this.ganchoController=new GanchoController(
      this,
      this.gancho,
      this.fishcontroller,
     
    )  
   
    //controlador robot
    this.robot = this.matter.add.sprite(960,230, 'personaje',undefined,{isStatic:false}).setFixedRotation()
    this.robot.setIgnoreGravity(true)

    this.robotController= new RobotController(
      this,
      this.robot,
      this.gancho
    )
      
   
   
    
    //temp
    this.temporizador= this.time.addEvent({ delay: 1000, callback: this.cadaSegundo , callbackScope: this, loop: true });
    
    setTimeout(() => {
      this.creapezesp("anguila","anguilablanca");
      this.cuentalibrito=1
     
    }, 15000);
    setTimeout(() => {
      this.creapezesp("manguruyu","manguruyublanco");
      this.cuentalibrito=1
      
    }, 35000);
    setTimeout(() => {
      this.creapezesp("sabalo","sabaloblanco");
      this.cuentalibrito=1
    }, 60000);
    setTimeout(() => {
      this.creapezesp("pirana","piranablanca");
      this.cuentalibrito=1
    }, 80000);
   
    events.on("pierde",this.juegoperdido,this)
    events.on("gana",this.juegoganado,this)
    events.on("toque",this.click,this)

  }

  destroy(){
    this.creapezesp
  }

  update(t:number,dt:number){
    this.robotController?.update(dt)
    this.ganchoController?.update(dt)

   //CONTROL BASURA
   
    if (this.tiempoBasura!<this.tiempo!)
    {
      this.basuraRandom=Phaser.Math.Between(0,3)

      if(this.basuraRandom==0){
       this.creaBasura("basura","cable")
       this.creaBasura("basura","lata")
       this.creaPez("pez1", "anguila")
       this.tiempoBasura=this.tiempo!+3
      }
      
      else if (this.basuraRandom==1){
        this.creaBasura("basura","bolsa")
        this.creaBasura("basura","cable")
        this.creaPez("pez2", "sabalo")
        this.tiempoBasura=this.tiempo!+3
      }
      
      else if (this.basuraRandom==2){
        this.creaBasura("basura","lata")
       
        this.creaPez("pez3", "manguruyu") 
        this.tiempoBasura=this.tiempo!+3
      }
      else {
        
        this.creaBasura("basura","cable")

        this.creaPez("pez4", "pirana")
        this.tiempoBasura=this.tiempo!+4
      }
    }
    
  }
 
  cadaSegundo(){
    this.tiempo = this.tiempo! + 1
  }
  
  creaBasura (tipo,sprite){
    const tipoBasura = tipo
    this.objbasura = new BasuraController(this,this.matter.add.sprite(-200,Phaser.Math.Between(500,900) , sprite, undefined, {
        isSensor: true       
    }),tipo)
    
  }

  creaPez (tipo,sprite){
    const TipoPez = tipo
    this.objpez = new FishController(this,this.matter.add.sprite(2250,Phaser.Math.Between(500,900) , sprite, undefined, {
        isSensor: true       
    }),tipo)
    
  }

  creapezesp(tipo,sprite){
    const TipoPezesp = tipo
    this.objpezesp = new FishespController(this,this.matter.add.sprite(2250,Phaser.Math.Between(500,900) , sprite, undefined, {
        isSensor: true       
    }),tipo)
  }
  
  juegoganado(){
    this.scene.stop("nivel2")
    this.musicagameplay.stop()
    this.scene.start("niv-ganado2")
  }

  juegoperdido(){
    this.scene.stop("nivel2")
    this.musicagameplay.stop()
    this.scene.start("niv-perdido2")
  }
  
  click(){
    if(this.cuentalibrito==1){
      this.sfxpopup.play()
      this.Click=this.matter.add.sprite(Phaser.Math.Between(100,1900), Phaser.Math.Between(900,800), 'libro',undefined,{isSensor:true})
      this.Click.setVelocityY(-15)
      this.Click.setFriction(0,0)
      this.Click.setIgnoreGravity(true)
      this.cuentalibrito=0
      }
  }

  musicaysfx(){
    this.musicagameplay = this.sound.add("musicgameplay", {volume: 0.5, loop: true});
    this.sfxcruz = this.sound.add("sonidocruz", {volume: 0.3});
    this.sfxbarco = this.sound.add("sonidobarco", {volume: 0.05});
    this.sfxpopup = this.sound.add("sonidopopup", {volume: 0.3});
    this.sfxtilde = this.sound.add("sonidotilde", {volume: 0.3});
  }

  tilde(){
    this.sfxtilde.play()
  }

  cruz(){
    this.sfxcruz.play()
  }

  musicstop(){
    this.musicagameplay.pause()
  }
  musicplay(){
    this.musicagameplay.resume()
  }

}



