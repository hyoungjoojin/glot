import { Scene } from 'phaser';

import { SCENE_KEYS } from '../constants/scenes';

export default class Preloader extends Scene {
  constructor() {
    super({
      key: SCENE_KEYS.PRELOADER,
    });
  }
}
