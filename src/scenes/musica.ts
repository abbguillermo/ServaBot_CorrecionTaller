import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class musica extends Phaser.Scene {
  


  private musicaganado: any
  private musicaperdido: any
  private musicaestado:any
  private juegom:any
  
  constructor() {
    super('musica');
  }

  create(){

    
    
    

   // this.musicaestado=this.menu()
    //this.juegom=this.juego()
    
    
    

    events.on("musicamenuON", this.musicamenustart, this)
    events.on("musicamenuOFF", this.musicamenustop, this)
    events.on("musicagameplayON", this.musicagamestart, this)
    events.on("musicagameplayOFF", this.musicagamestop, this)
    events.on("musicaganadoON", this.musicanivganadostart, this)
    events.on("musicaganadoOFF", this.musicanivganadostop, this)
    events.on("musicaperdidoON", this.musicanivperdidostart, this)
    events.on("musicaperdidoOFF", this.musicanivperdidostop, this)
   
  } 

  musicanivperdidostart(){

  }

  musicanivperdidostop(){

  }
  
  musicanivganadostart(){

  }

  musicanivganadostop(){

  }

  juego(){
    return localStorage.getItem('musica2') || "any";
  }
}