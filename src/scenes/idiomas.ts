import Phaser from 'phaser'
import { EN_US, ES_AR, PT_BR } from '~/enums/languages'
import { FETCHED, FETCHING, READY, TODO } from '~/enums/status'
import { getTranslations } from '~/services/translations'

export default class idiomas extends Phaser.Scene {

  private wasChangedLanguage = TODO
  private sfxboton: any

  constructor() {
    super('idiomas');
  }

  create(){

    this.musicaysfx()

    this.add.image(960, 540, "fondomenu");

    this.add.image(960,540,"general")

    const botonarg=this.add.image(360,540,"argentina")
    botonarg.setInteractive()
    .on('pointerover', () => botonarg.setScale(1.1))
		.on('pointerout', () => botonarg.setScale(1))
    botonarg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.sfxboton.play()
      this.getTranslations(ES_AR)
      localStorage.setItem("idiom","esp")
      let boton=this.add.image(960,540,"eeuu")
      boton.setInteractive()
      boton.on('pointerdown', () => this.nada())
      let boton2=this.add.image(1560,540,"brasil")
      boton2.setInteractive()
      boton2.on('pointerdown', () => this.nada())
      let boton3=this.add.image(360,540,"argentina")
      boton3.setInteractive()
      boton3.on('pointerdown', () => this.nada())
    });


    const botoneeuu=this.add.image(960,540,"eeuu")
    botoneeuu.setInteractive()
    .on('pointerover', () => botoneeuu.setScale(1.1))
		.on('pointerout', () => botoneeuu.setScale(1))
    botoneeuu.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.sfxboton.play()
      this.getTranslations(EN_US)
      localStorage.setItem("idiom","eng")
      let boton=this.add.image(960,540,"eeuu")
      boton.setInteractive()
      boton.on('pointerdown', () => this.nada())
      let boton2=this.add.image(1560,540,"brasil")
      boton2.setInteractive()
      boton2.on('pointerdown', () => this.nada())
      let boton3=this.add.image(360,540,"argentina")
      boton3.setInteractive()
      boton3.on('pointerdown', () => this.nada())
    });


    const botonbr=this.add.image(1560,540,"brasil")
    botonbr.setInteractive()
    .on('pointerover', () => botonbr.setScale(1.1))
		.on('pointerout', () => botonbr.setScale(1))
    botonbr.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
      this.sfxboton.play()
      this.getTranslations(PT_BR)
      localStorage.setItem("idiom","segundos")
      let boton=this.add.image(960,540,"eeuu")
      boton.setInteractive()
      boton.on('pointerdown', () => this.nada())
      let boton2=this.add.image(1560,540,"brasil")
      boton2.setInteractive()
      boton2.on('pointerdown', () => this.nada())
      let boton3=this.add.image(360,540,"argentina")
      boton3.setInteractive()
      boton3.on('pointerdown', () => this.nada())
    });
 
    
  } 




  async getTranslations(language){
    this.wasChangedLanguage = FETCHING
    await getTranslations(language)
    this.wasChangedLanguage = FETCHED
    // si solo se tiene un menu para elegir las opciones de idiomas conviene cargar aca la misma
    this.scene.start('inicio')
  }

  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}

  nada(){

  }
}