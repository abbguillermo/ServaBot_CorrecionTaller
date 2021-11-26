import Phaser, { Physics, Tweens } from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class fondo extends Phaser.Scene
{
  private mapa!:any
  private escenas:any
  private barcos?:Phaser.Physics.Matter.Sprite
  private barcos1?:Phaser.Physics.Matter.Sprite
  private barcos2?:Phaser.Physics.Matter.Sprite
  private nubes?: Phaser.Physics.Matter.Sprite
  private nubes2?: Phaser.Physics.Matter.Sprite
  private nubes3?: Phaser.Physics.Matter.Sprite
  private nubes4?: Phaser.Physics.Matter.Sprite
  private nubes5?: Phaser.Physics.Matter.Sprite
  private nubes6?: Phaser.Physics.Matter.Sprite

	constructor()
	{
		super({
			key: 'fondo'
		})
	}

	init()
	{

	}

	create()
	{   
    this.escenas=this.getLocal()
    if(this.escenas==1){
      this.mapa= this.add.image(960,540,"fondoniv1")
    } else if(this.escenas==2){
      this.mapa= this.add.image(960,540,"fondoniv2")
      this.barcos1=this.matter.add.sprite(1900,320,"barco2",undefined,{isSensor:true})
      this.barcos1.setIgnoreGravity(true)
      this.barcos1.setFriction(0,0)
      this.barcos1.setVelocityX(-0.09)

      this.barcos2=this.matter.add.sprite(100,330,"barco3",undefined,{isSensor:true})
      this.barcos2.setIgnoreGravity(true)
      this.barcos2.setFriction(0,0)
      this.barcos2.setVelocityX(0.09)

    } else if(this.escenas==3){
      this.mapa=this.add.image(960,540,"fondoniv3")
    }
       

    this.nubes=this.matter.add.sprite(500,200,"nubes",undefined,{isSensor:true})
    this.nubes.setIgnoreGravity(true)
    this.nubes.setFriction(0,0)
    this.nubes.setVelocityX(0.09)
        
    this.nubes2=this.matter.add.sprite(1000,200,"nubes2",undefined,{isSensor:true})
    this.nubes2.setIgnoreGravity(true)
    this.nubes2.setFriction(0,0)
    this.nubes2.setVelocityX(0.09)

    this.nubes3=this.matter.add.sprite(1500,100,"nubes3",undefined,{isSensor:true})
    this.nubes3.setIgnoreGravity(true)
    this.nubes3.setFriction(0,0)
    this.nubes3.setVelocityX(-0.09)

    this.nubes4=this.matter.add.sprite(100,150,"nubes3",undefined,{isSensor:true})
    this.nubes4.setIgnoreGravity(true)
    this.nubes4.setFriction(0,0)
    this.nubes4.setVelocityX(0.08)
        
    this.nubes5=this.matter.add.sprite(100,250,"nubes",undefined,{isSensor:true})
    this.nubes5.setIgnoreGravity(true)
    this.nubes5.setFriction(0,0)
    this.nubes5.setVelocityX(0.08)
    this.nubes5.setScale(0.5)
        
    this.nubes6=this.matter.add.sprite(1800,250,"nubes",undefined,{isSensor:true})
    this.nubes6.setIgnoreGravity(true)
    this.nubes6.setFriction(0,0)
    this.nubes6.setVelocityX(-0.08)
    this.nubes6.setScale(0.5)

    if(this.escenas==2){
      this.barcos=this.matter.add.sprite(-3000,200,"barco",undefined,{isSensor:true})
      this.barcos.setIgnoreGravity(true)
      this.barcos.setFriction(0,0)
      this.barcos.setVelocityX(2)
    }

  }

  getLocal(){
    return localStorage.getItem('NivelDesbolqueado') || '1';
  }
 
}