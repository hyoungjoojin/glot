import { Scene } from 'phaser';

import { KeyboardInputComponent } from '../components/input/keyboard';
import { SCENE_KEYS } from '../constants/scenes';
import Player from '../entities/characters/player';

export default class MainMenu extends Scene {
  #controls!: {
    keyboard: KeyboardInputComponent;
  };

  #player!: Player;

  constructor() {
    super({
      key: SCENE_KEYS.MAIN_MENU,
    });
  }

  create() {
    if (!this.input.keyboard) {
      throw new Error('Keyboard is not available');
    }

    this.#controls = {
      keyboard: new KeyboardInputComponent(this.input.keyboard),
    };

    this.#player = new Player({
      scene: this,
      position: {
        x: this.scale.width / 2,
        y: this.scale.height / 2,
      },
      input: this.#controls.keyboard,
    });
  }
}
