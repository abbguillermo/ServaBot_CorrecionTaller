import Phaser from 'phaser'
import { sharedInstance as events } from './EventCenter'

export default class galeria extends Phaser.Scene {
  
  private sardina:any
  private dorado:any
  private boga:any
  private anguila:any
  private dientudo:any
  private manguruyu:any
  private mojarra:any
  private pacu:any
  private pati:any
  private pirana:any
  private sabalo:any
  private vieja:any
  private idiomas:any
  private sfxboton: any

  constructor() {
    super('galery');
  }

  create(){

    this.musicaysfx()

    this.sardina=this.ls_sardina()
    this.dorado=this.ls_dorados()
    this.boga=this.ls_bogas()
    this.anguila=this.ls_anguila()
    this.dientudo=this.ls_dientudo()
    this.manguruyu=this.ls_manguruyu()
    this.pacu=this.ls_pacu()
    this.pati=this.ls_pati()
    this.sabalo=this.ls_sabalo()
    this.vieja=this.ls_vieja()
    this.mojarra=this.ls_mojarra()
    this.pirana=this.ls_pirana()
    this.idiomas=this.idioma()
    console.log(this.boga)
    this.add.image(960, 540, "fondomenu");
    this.add.image(960,540,"fondogaleria")
    this.add.image(1030,500,"info")
          
    var botonvolver=this.add.image(955,955,"ok")
    botonvolver.setInteractive()
    .on('pointerover', () => botonvolver.setScale(1.1))
		.on('pointerout', () => botonvolver.setScale(1))
    botonvolver.on('pointerdown', () => this.scene.start("inicio") && this.sfxboton.play() && events.emit("stopmenu"))

    
    if(this.sardina=="sardina"){
      this.onsardina()
    }
    if(this.dorado=="dorado"){
      this.ondorado()
    }
    if(this.boga=="boga"){
      this.onboga()
    }
    if(this.sabalo=="sabalo"){
      this.onsabalo()
    }
    if(this.anguila=="anguila"){
      this.onanguila()
    }
    if(this.pacu=="pacu"){
      this.onpacu()
    }
    if(this.pati=="pati"){
      this.onpati()
    }
    if(this.dientudo=="dientudo"){
      this.ondientudo()
    }
    if(this.manguruyu=="manguruyu"){
      this.onmanguruyu()
    }
    if(this.vieja=="vieja"){
      this.onviejadelagua()
    }
    if(this.mojarra=="mojarra"){
      this.onmojarra()
    }
    if(this.pirana=="pirana"){
      this.onpirana()
    }
  } 

  onsardina(){
    let pez1= this.matter.add.sprite(1153,130,"sardina",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez1.setScale(1.1))
		.on('pointerout', () => pez1.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(570,525,"info_es_sardina",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(570,525,"info_pr_sardina",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(570,525,"info_en_sardina",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"sardinabig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  ondorado(){
    let pez2= this.matter.add.sprite(435,130,"dorado",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez2.setScale(1.1))
		.on('pointerout', () => pez2.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(580,525,"info_es_dorado",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(580,525,"info_pr_dorado",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(580,525,"info_en_dorado",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"doradobig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		});  
  }

  onboga(){
    let pez3= this.matter.add.sprite(795,130,"boga",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez3.setScale(1.1))
		.on('pointerout', () => pez3.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(570,525,"info_es_boga",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(570,525,"info_pr_boga",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(570,525,"info_en_boga",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"bogabig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onsabalo(){
    let pez4= this.matter.add.sprite(1170,295,"sabalo",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez4.setScale(1.1))
		.on('pointerout', () => pez4.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(565,525,"info_es_sabalo",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(565,525,"info_pr_sabalo",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(565,525,"info_en_sabalo",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"sabalobig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onanguila(){
    let pez5= this.matter.add.sprite(650,295,"anguila",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez5.setScale(1.1))
		.on('pointerout', () => pez5.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(565,525,"info_es_anguila",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(565,525,"info_pr_anguila",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(565,525,"info_en_anguila",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"anguilabig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onmanguruyu(){
    let pez6= this.matter.add.sprite(580,515,"manguruyu",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez6.setScale(1.1))
		.on('pointerout', () => pez6.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(565,525,"info_es_manguruyu",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(565,525,"info_pr_manguruyu",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(565,525,"info_en_manguruyu",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"manguruyubig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  ondientudo(){
    let pez7= this.matter.add.sprite(1225,730,"dientudo",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez7.setScale(1.1))
		.on('pointerout', () => pez7.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(540,525,"info_es_dientudo",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(540,525,"info_pr_dientudo",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(540,525,"info_en_dientudo",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"dientudobig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onpacu(){
    let pez8= this.matter.add.sprite(1416,515,"pacu",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez8.setScale(1.1))
		.on('pointerout', () => pez8.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(550,525,"info_es_pacu",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(550,525,"info_pr_pacu",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(550,525,"info_en_pacu",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"pacubig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onpati(){
    let pez9= this.matter.add.sprite(777,730,"pati",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez9.setScale(1.1))
		.on('pointerout', () => pez9.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(580,525,"info_es_pati",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(580,525,"info_pr_pati",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(580,525,"info_en_pati",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"patibig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onviejadelagua(){
    let pez10= this.matter.add.sprite(1030,515,"viejadelagua",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez10.setScale(1.1))
		.on('pointerout', () => pez10.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(570,525,"info_es_viejadelagua",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(570,525,"info_pr_viejadelagua",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(570,525,"info_en_viejadelagua",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"viejadelaguabig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }

  onmojarra(){
    let pez11= this.matter.add.sprite(1490,130,"mojarra",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez11.setScale(1.1))
		.on('pointerout', () => pez11.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(540,525,"info_es_mojarra",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(540,525,"info_pr_mojarra",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(540,525,"info_en_mojarra",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"mojarrabig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }
  
  onpirana(){
    let pez12= this.matter.add.sprite(1470,295,"pirana",undefined,{isStatic:true})
    .setInteractive()
    .on('pointerover', () => pez12.setScale(1.1))
		.on('pointerout', () => pez12.setScale(1))
    .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
		{
      this.sfxboton.play()
			let esp=this.add.image(960,540,"especies")
      if(this.idiomas=="esp"){
        var info=this.matter.add.sprite(580,525,"info_es_pirana",undefined,{isStatic:true})
      }
      if(this.idiomas=="segundos"){
        var info=this.matter.add.sprite(580,525,"info_pr_pirana",undefined,{isStatic:true})
      }
      if(this.idiomas=="eng"){
        var info=this.matter.add.sprite(580,525,"info_en_pirana",undefined,{isStatic:true})
      }
      let pez=this.add.image(1375,540,"piranabig")
      let boton= this.add.image(960,960,"ok").setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>
      {
        this.sfxboton.play()
        esp.destroy()
        info.destroy()
        pez.destroy()
        boton.destroy()
        
      }); 
		}); 
  }


  ls_sardina(){
    return localStorage.getItem('peces_sardina') || 'any';
  }

  ls_dorados(){
    return localStorage.getItem('peces_dorado') || 'any';
  }

  ls_bogas(){
    return localStorage.getItem('peces_boga') || 'any';
  }

  ls_sabalo(){
    return localStorage.getItem('peces_sabalo') || 'any';
  }

  ls_anguila(){
    return localStorage.getItem('peces_anguila') || 'any';
  }

  ls_manguruyu(){
    return localStorage.getItem('peces_manguruyu') || 'any';
  }

  ls_dientudo(){
    return localStorage.getItem('peces_dientudo') || 'any';
  }

  ls_pacu(){
    return localStorage.getItem('peces_pacu') || 'any';
  }

  ls_pati(){
    return localStorage.getItem('peces_pati') || 'any';
  }

  ls_vieja(){
    return localStorage.getItem('peces_vieja') || 'any';
  }

  ls_mojarra(){
    return localStorage.getItem('peces_mojarra') || 'any';
  }
  
  ls_pirana(){
    return localStorage.getItem('peces_pirana') || 'any';
  }

  idioma(){
    return localStorage.getItem('idiom') || 'any';
  }

  musicaysfx(){
		this.sfxboton = this.sound.add("sonidobotones", {volume: 0.3});
	}
}