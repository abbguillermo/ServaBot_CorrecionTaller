import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class FishespController extends Phaser.Scene {

    private Scene?:Phaser.Scene
    private pezesp?:Phaser.Physics.Matter.Sprite
    private TipoPezesp?:string
    private tamañopezesp!:number
    private escenas:any
    private click?:Phaser.Physics.Matter.Sprite
   
	constructor(scene:Phaser.Scene,pezesp:Phaser.Physics.Matter.Sprite,tipoPezesp:string)
	{
		super('fishespcontroller')

        this.Scene= scene
        this.pezesp= pezesp
        this.TipoPezesp= tipoPezesp
        this.tamañopezesp=1

        this.escenas=this.getLocal()
        if(this.escenas==1){
            this.tamañopezesp=1
        } else if (this.escenas==2){
            this.tamañopezesp=0.7
        }

        this.pezesp.setFriction(0,0)
        this.pezesp.setScale(1)
        this.pezesp.setVelocityX(Phaser.Math.Between(-3,-5))
        this.pezesp.setIgnoreGravity(true)

        /////// seteo de información /////////
        this.pezesp.setDataEnabled()
        this.pezesp.data.set('levantado', "peces");
        this.pezesp.data.set('tipo',tipoPezesp);
        this.pezesp.setData('colisionando',false);  

        this.pezesp.data.set('seleccionado',false)
        events.on("cambio",this.cambiovelocidad,this)
        this.pezesp.setInteractive()
        .on("pointerdown",() => this.agarrar());
        
	}

    agarrar(){
        events.emit("toque")
        if (this.pezesp?.getData("tipo")=="sardina"){
            localStorage.setItem("peces_sardina","sardina")
        
        }
        if (this.pezesp?.getData("tipo")=="dorado"){
            localStorage.setItem("peces_dorado","dorado")
        
        }
        if (this.pezesp?.getData("tipo")=="boga"){
            localStorage.setItem("peces_boga","boga")
        
        }
        if (this.pezesp?.getData("tipo")=="manguruyu"){
            localStorage.setItem("peces_manguruyu","manguruyu")
        
        }
        if (this.pezesp?.getData("tipo")=="anguila"){
            localStorage.setItem("peces_anguila","anguila")
        
        }
        if (this.pezesp?.getData("tipo")=="sabalo"){
            localStorage.setItem("peces_sabalo","sabalo")
        
        }
        if (this.pezesp?.getData("tipo")=="vieja"){
            localStorage.setItem("peces_vieja","vieja")
        
        }
        if (this.pezesp?.getData("tipo")=="pati"){
            localStorage.setItem("peces_pati","pati")
        
        }
        if (this.pezesp?.getData("tipo")=="pacu"){
            localStorage.setItem("peces_pacu","pacu")
        
        }
        if (this.pezesp?.getData("tipo")=="dientudo"){
            localStorage.setItem("peces_dientudo","dientudo")
        
        }
        if (this.pezesp?.getData("tipo")=="mojarra"){
            localStorage.setItem("peces_mojarra","mojarra")
        
        }
        if (this.pezesp?.getData("tipo")=="pirana"){
            localStorage.setItem("peces_pirana","pirana")
        
        }
    }

    getLocal(){
        return localStorage.getItem('NivelDesbolqueado') || '1';
    }
    cambiovelocidad(){
        this.pezesp?.setVelocityX(Phaser.Math.Between(-10,-15))
    }
}