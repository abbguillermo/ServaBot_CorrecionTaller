import Phaser from 'phaser'

export default class preload extends Phaser.Scene {

  private musicmenu: any
  private logo:any
  private logo1:any
  constructor() {
    super('preload');
  }

  preload(){
    this.load.image("botonclose","assets/Sprites/Interface/Buttons/gripper_close.png");
    this.load.image("fondomenu", "assets/Sprites/Backgrounds/background_menus.png");
    this.load.image("fondowin","assets/Sprites/Backgrounds/background_2.png")
    this.load.image("logo", "assets/Sprites/Logo/logo.png");
    this.load.image("botonInstrucciones","assets/Sprites/Interface/Buttons/instructions.png");
    this.load.image("botonJugar","assets/Sprites/Interface/Buttons/play.png");
    this.load.image("creditosmenu","assets/Sprites/Interface/Buttons/credits_v1.png");
    this.load.image("settingsmenu","assets/Sprites/Interface/Buttons/settings.png");
    this.load.image("creditos","assets/Sprites/Interface/PopUps/credits.png");
    this.load.image("niveles","assets/Sprites/Interface/PopUps/levels.png");
    this.load.image("general","assets/Sprites/Interface/PopUps/general.png");
    this.load.image("volver","assets/Sprites/Interface/Buttons/back.png");
    this.load.image("niv1","assets/Sprites/Interface/Buttons/level_1.png");
    this.load.image("niv2","assets/Sprites/Interface/Buttons/level_2.png");
    this.load.image("niv3","assets/Sprites/Interface/Buttons/level_3.png");
    this.load.image("galery","assets/Sprites/Interface/Buttons/gallery.png");
    this.load.image("fondogaleria","assets/Sprites/Interface/PopUps/gallery.png");
    this.load.image("pausa","assets/Sprites/Interface/Buttons/pause.png");
    this.load.image("nivelblock","assets/Sprites/Interface/Buttons/level_blocked.png");
    this.load.image("mutear","assets/Sprites/Interface/Buttons/sound_mute.png");
    this.load.image("desmutear","assets/Sprites/Interface/Buttons/sound_unmute.png");
    this.load.image("mutear2","assets/Sprites/Interface/Buttons/sound_mute_v2.png");
    this.load.image("desmutear2","assets/Sprites/Interface/Buttons/sound_unmute_v2.png");
    this.load.image("fondoniv1", "assets/Sprites/Backgrounds/background_1.png");
    this.load.image("fondoniv2", "assets/Sprites/Backgrounds/background_2.1.png");
    this.load.image("fondoniv3","assets/Sprites/Backgrounds/background_3.png")
    this.load.image("barrageneral","assets/Sprites/Interface/Bars/general.png");
    this.load.image("barrabasura","assets/Sprites/Interface/Bars/cuota_up.png");
    this.load.image("barravida","assets/Sprites/Interface/Bars/life_up.png");
    this.load.image("recuadro","assets/Sprites/Interface/Extras/Frame.png");
    this.load.image("extensionesbot","assets/Sprites/Interface/Extras/frame_extension.png");
    this.load.image("ajustes","assets/Sprites/Interface/PopUps/settings.png");
    this.load.image("instrucciones","assets/Sprites/Interface/PopUps/instructions.png");
    this.load.image("especies","assets/Sprites/Interface/PopUps/species.png");
    this.load.image("libro","assets/Sprites/Interface/Extras/book.png");
    this.load.spritesheet("logoUNRAF","assets/Sprites/Interface/Extras/gifunraf.png", { frameWidth: 640, frameHeight: 360 })
    this.load.spritesheet("logotenno","assets/Sprites/Interface/Extras/giftenno.png", { frameWidth: 1200, frameHeight: 1080 })

    //Power Up
    this.load.image("botonpower","assets/Sprites/Interface/Buttons/powerup.png");
    this.load.image("power1","assets/Sprites/Interface/Extras/PU_1.png");
    this.load.image("power2","assets/Sprites/Interface/Extras/PU_2.png");
    // this.load.image("power3","assets/Sprites/Interface/Extras/PU_3.png");
    // this.load.image("power4","assets/Sprites/Interface/Extras/PU_4.png");

    //Botones
    this.load.image("reintentar","assets/Sprites/Interface/Buttons/retry.png");
    this.load.image("menu","assets/Sprites/Interface/Buttons/menu.png");
    this.load.image("siguiente","assets/Sprites/Interface/Buttons/next.png");
    this.load.image("ok","assets/Sprites/Interface/Buttons/ok.png");
    this.load.image("gallerynew", "assets/Sprites/Interface/Buttons/gallery_new.png");
    this.load.image("btnidioma", "assets/Sprites/Interface/Buttons/language.png");
    
    //Ganchos
    this.load.image("ganchopunta","assets/Sprites/Serva/grippers_open.png");
    this.load.image("ganchocerrado", "assets/Sprite/Serva/grippers_close");

    //Caras personaje
    this.load.image("personaje","assets/Sprites/Serva/body_happy.png");
    this.load.image("personajetriste","assets/Sprites/Serva/body_sad.png");
    this.load.image("personajeconc","assets/Sprites/Serva/body_concentrated.png");
    this.load.image("personajebien","assets/Sprites/Serva/body_goodg.png");
    this.load.image("personajemal","assets/Sprites/Serva/body_bad.png");

    //Boton gancho
    this.load.image("botongancho","assets/Sprites/Interface/Buttons/gripper.png");
    this.load.image("info","assets/Sprites/Interface/Extras/info.png");

    //Peces
    this.load.image("pirana","assets/Sprites/Fishes/pirana.png");
    this.load.image("anguila", "assets/Sprites/Fishes/anguila.png");
    this.load.image("boga", "assets/Sprites/Fishes/boga.png");
    this.load.image("dientudo", "assets/Sprites/Fishes/dientudo.png");
    this.load.image("dorado", "assets/Sprites/Fishes/dorado.png");
    this.load.image("manguruyu", "assets/Sprites/Fishes/manguruyu.png");
    this.load.image("mojarra", "assets/Sprites/Fishes/mojarra.png");
    this.load.image("pacu", "assets/Sprites/Fishes/pacu.png");
    this.load.image("pati", "assets/Sprites/Fishes/pati.png");
    this.load.image("sabalo", "assets/Sprites/Fishes/sabalo.png");
    this.load.image("sardina", "assets/Sprites/Fishes/sardina.png");
    this.load.image("viejadelagua", "assets/Sprites/Fishes/viejadelagua.png");
    //peces blancos
    this.load.image("sardinablanca", "assets/Sprites/Fishes/sardina_white.png");
    this.load.image("bogablanca", "assets/Sprites/Fishes/boga_white.png");
    this.load.image("anguilablanca", "assets/Sprites/Fishes/anguila_white.png");
    this.load.image("doradoblanco", "assets/Sprites/Fishes/dorado_white.png");
    this.load.image("sabaloblanco", "assets/Sprites/Fishes/sabalo_white.png");
    this.load.image("manguruyublanco", "assets/Sprites/Fishes/manguruyu_white.png");
    this.load.image("piranablanca", "assets/Sprites/Fishes/pirana_white.png");
    this.load.image("viejadelaguablanca", "assets/Sprites/Fishes/viejadelagua_white.png");
    this.load.image("dientudoblanco", "assets/Sprites/Fishes/dientudo_white.png");
    this.load.image("patiblanco", "assets/Sprites/Fishes/pati_white.png");
    this.load.image("pacublanco", "assets/Sprites/Fishes/pacu_white.png");
    this.load.image("mojarrablanca", "assets/Sprites/Fishes/mojarra_white.png");
    this.load.image("piranablanca", "assets/Sprites/Fishes/pirana_white.png");
    
    //peces grandes
    this.load.image("anguilabig", "assets/Sprites/Fishes/anguila_big.png");
    this.load.image("bogabig", "assets/Sprites/Fishes/boga_big.png");
    this.load.image("dientudobig", "assets/Sprites/Fishes/dientudo_big.png");
    this.load.image("doradobig", "assets/Sprites/Fishes/dorado_big.png");
    this.load.image("manguruyubig", "assets/Sprites/Fishes/manguruyu_big.png");
    this.load.image("mojarrabig", "assets/Sprites/Fishes/mojarra_big.png");
    this.load.image("pacubig", "assets/Sprites/Fishes/pacu_big.png");
    this.load.image("patibig", "assets/Sprites/Fishes/pati_big.png");
    this.load.image("piranabig", "assets/Sprites/Fishes/pirana_big.png");
    this.load.image("sabalobig", "assets/Sprites/Fishes/sabalo_big.png");
    this.load.image("sardinabig", "assets/Sprites/Fishes/sardina_big.png");
    this.load.image("viejadelaguabig", "assets/Sprites/Fishes/viejadelagua_big.png");

    this.load.image("bogaojo", "assets/Sprites/Fishes/spritesheet/boga_bad.png");
    
    //Info peces
    //en
    this.load.image("info_en_anguila","assets/Sprites/Info/info_en_anguila.png");
    this.load.image("info_en_boga","assets/Sprites/Info/info_en_boga.png");
    this.load.image("info_en_dientudo","assets/Sprites/Info/info_en_dientudo.png");
    this.load.image("info_en_dorado","assets/Sprites/Info/info_en_dorado.png");
    this.load.image("info_en_manguruyu","assets/Sprites/Info/info_en_manguruyu.png");
    this.load.image("info_en_mojarra","assets/Sprites/Info/info_en_mojarra.png");
    this.load.image("info_en_pacu","assets/Sprites/Info/info_en_pacu.png");
    this.load.image("info_en_pati","assets/Sprites/Info/info_en_pati.png");
    this.load.image("info_en_pirana","assets/Sprites/Info/info_en_pirana.png");
    this.load.image("info_en_sabalo","assets/Sprites/Info/info_en_sabalo.png");
    this.load.image("info_en_sardina","assets/Sprites/Info/info_en_sardina.png");
    this.load.image("info_en_viejadelagua","assets/Sprites/Info/info_en_viejadelagua.png");
    //es
    this.load.image("info_es_anguila","assets/Sprites/Info/info_es_anguila.png");
    this.load.image("info_es_boga","assets/Sprites/Info/info_es_boga.png");
    this.load.image("info_es_dientudo","assets/Sprites/Info/info_es_dientudo.png");
    this.load.image("info_es_dorado","assets/Sprites/Info/info_es_dorado.png");
    this.load.image("info_es_manguruyu","assets/Sprites/Info/info_es_manguruyu.png");
    this.load.image("info_es_mojarra","assets/Sprites/Info/info_es_mojarra.png");
    this.load.image("info_es_pacu","assets/Sprites/Info/info_es_pacu.png");
    this.load.image("info_es_pati","assets/Sprites/Info/info_es_pati.png");
    this.load.image("info_es_pirana","assets/Sprites/Info/info_es_pirana.png");
    this.load.image("info_es_sabalo","assets/Sprites/Info/info_es_sabalo.png");
    this.load.image("info_es_sardina","assets/Sprites/Info/info_es_sardina.png");
    this.load.image("info_es_viejadelagua","assets/Sprites/Info/info_es_viejadelagua.png");
    //pr
    this.load.image("info_pr_anguila","assets/Sprites/Info/info_pr_anguila.png");
    this.load.image("info_pr_boga","assets/Sprites/Info/info_pr_boga.png");
    this.load.image("info_pr_dientudo","assets/Sprites/Info/info_pr_dientudo.png");
    this.load.image("info_pr_dorado","assets/Sprites/Info/info_pr_dorado.png");
    this.load.image("info_pr_manguruyu","assets/Sprites/Info/info_pr_manguruyu.png");
    this.load.image("info_pr_mojarra","assets/Sprites/Info/info_pr_mojarra.png");
    this.load.image("info_pr_pacu","assets/Sprites/Info/info_pr_pacu.png");
    this.load.image("info_pr_pati","assets/Sprites/Info/info_pr_pati.png");
    this.load.image("info_pr_pirana","assets/Sprites/Info/info_pr_pirana.png");
    this.load.image("info_pr_sabalo","assets/Sprites/Info/info_pr_sabalo.png");
    this.load.image("info_pr_sardina","assets/Sprites/Info/info_pr_sardina.png");
    this.load.image("info_pr_viejadelagua","assets/Sprites/Info/info_pr_viejadelagua.png");


    //Basura
    this.load.image("bota","assets/Sprites/Trash/trash_1.png");
    this.load.image("bot-rota","assets/Sprites/Trash/trash_2.png");
    this.load.image("botella","assets/Sprites/Trash/trash_3.png");
    this.load.image("pila","assets/Sprites/Trash/trash_4.png");
    this.load.image("celular","assets/Sprites/Trash/trash_5.png");
    this.load.image("bolsa","assets/Sprites/Trash/trash_6.png");
    this.load.image("cable","assets/Sprites/Trash/trash_7.png");
    this.load.image("lata","assets/Sprites/Trash/trash_8.png");

    //Fondo
    this.load.image("nubes","assets/Sprites/Clouds/cloud_1.png");
    this.load.image("nubes2","assets/Sprites/Clouds/cloud_2.png");
    this.load.image("nubes3","assets/Sprites/Clouds/cloud_3.png");

    this.load.image("barco","assets/Sprites/Boats/boat_1.png");
    this.load.image("barco2","assets/Sprites/Boats/boat_2.png");
    this.load.image("barco3","assets/Sprites/Boats/boat_3.png");

    //Idiomas
    this.load.image("argentina","assets/Sprites/Interface/Buttons/argentina.png");
    this.load.image("eeuu","assets/Sprites/Interface/Buttons/usa.png");
    this.load.image("brasil","assets/Sprites/Interface/Buttons/brasil.png");

    //UI Barras
    this.load.image("vidallena","assets/Sprites/Interface/Bars/life_bar.png");
    this.load.image("basurallena","assets/Sprites/Interface/Bars/cuota_bar.png");


    this.load.image("piso","assets/Sprites/Backgrounds/piso.png");
    this.load.image("pared","assets/Sprites/Backgrounds/pared.png")

    //Musica
    this.load.audio("musicextra","assets/Music/music_extra.mp3")
    this.load.audio("musicgameplay","assets/Music/music_gameplay.mp3")
    this.load.audio("musiclost","assets/Music/music_lost.mp3")
    this.load.audio("musicmenu","assets/Music/music_menu.mp3")
    this.load.audio("musicwin","assets/Music/music_win.mp3")

    //FX
    this.load.audio("sonidocruz","assets/SFX/sfx_cruz.mp3")
    this.load.audio("sonidopopup","assets/SFX/sfx_popup.mp3")
    this.load.audio("sonidotilde","assets/SFX/sfx_tilde.mp3")
    this.load.audio("sonidobotones","assets/SFX/ClickSound.mp3")
    this.load.audio("sonidopower","assets/SFX/sfx_power.mp3")
    this.load.audio("sonidogancho","assets/SFX/gancho_sfx.mp3")
    this.load.audio("sonidobarco","assets/SFX/sfx_boat.mp3")


    //Personaje
    this.load.spritesheet('personaje', 'assets/Sprites/Serva/spritessheet.png', { frameWidth: 800, frameHeight: 150 });

  }

  create(){

    this.anims.create({
      key: "anim_unraf",
      frames: this.anims.generateFrameNumbers("logoUNRAF", {
        start: 0,
        end: 39,
      }),
      frameRate: 20,
    });
    this.anims.create({
      key: "anim_tenno",
      frames: this.anims.generateFrameNumbers("logotenno", {
        start: 0,
        end: 35,
      }),
      frameRate: 15,
      repeat:0
    });
    this.logo = this.add.sprite(940, 540, "logotenno").setScale(1);
    this.logo.play("anim_tenno");
    //this.scene.launch("musica")
    setTimeout(() => {
      this.logo = this.add.sprite(940, 540, "logoUNRAF").setScale(4);
    this.logo.play("anim_unraf");
    }, 6000);
    setTimeout(() => {
      this.scene.start("idiomas");
    }, 9000);
    
  }

}