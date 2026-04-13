import { Scene } from 'phaser';

import { ASSET_KEYS, ASSET_PACKS } from '../constants/assets';
import { SCENE_KEYS } from '../constants/scenes';

export default class Preloader extends Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOADER,
    });
  }

  preload() {
    this.load.pack(ASSET_PACKS.CHARACTERS, '/assets/characters/pack.json');
  }

  create() {
    this.anims.createFromAseprite(ASSET_KEYS.PLAYER);
    this.scene.start(SCENE_KEYS.MAIN_MENU);
  }
}
