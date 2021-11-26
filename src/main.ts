import 'regenerator-runtime/runtime'
import Phaser from 'phaser'

import preload from './scenes/preload'
import UI from './scenes/ui'
import menu from './scenes/menu'
import galeria from './scenes/galery'
import creditos from './scenes/creditos'
import instrucciones from './scenes/instrucciones'
import Sniv from './scenes/selecniveles'
import nivel_1 from './scenes/nivel1'
import fondo from "./scenes/fondo"
import nivwin from "./scenes/niv_ganado"
import nivperd from "./scenes/niv_predido"
import nivel_2 from './scenes/nivel2'
import nivwin2 from "./scenes/niv_ganado 2"
import nivperd1 from './scenes/niv_predido1'
import nivel_3 from './scenes/nivel3'
import pausa from './scenes/pausa'
import ajustes from "./scenes/ajustes"
import especies from "./scenes/especies"
import idiomas from "./scenes/idiomas"
import nivperd2 from './scenes/niv_predido2'
import nivwin3 from './scenes/niv_ganado 3'
import musica from './scenes/musica'


const config : Phaser.Types.Core.GameConfig =
{
  type: Phaser.WEBGL,
  scale: 
  {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
  physics: 
  {
    default: 'matter',
    matter:
    {
      gravity: { y:0.5 },
      debug: false
    }
  },


  
  scene: [preload, idiomas,musica,galeria,menu,ajustes,creditos,instrucciones,Sniv,fondo, nivel_1,especies,nivperd,nivwin,nivel_2,nivperd1,nivwin2,nivel_3,UI,pausa,nivperd2,nivwin3]

};

export default new Phaser.Game(config)
localStorage.setItem('NivelDesbolqueado',"1");
