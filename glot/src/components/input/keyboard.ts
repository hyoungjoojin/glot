import { Input, Types } from 'phaser';

import { InputComponent } from './';

export class KeyboardInputComponent extends InputComponent {
  #cursorKeys: Types.Input.Keyboard.CursorKeys;
  #enterKey: Input.Keyboard.Key;

  constructor(plugin: Input.Keyboard.KeyboardPlugin) {
    super();

    this.#cursorKeys = plugin.createCursorKeys();
    this.#enterKey = plugin.addKey(Input.Keyboard.KeyCodes.ENTER);
  }

  get up(): boolean {
    return this.#cursorKeys.up.isDown;
  }

  get down(): boolean {
    return this.#cursorKeys.down.isDown;
  }

  get left(): boolean {
    return this.#cursorKeys.left.isDown;
  }

  get right(): boolean {
    return this.#cursorKeys.right.isDown;
  }

  get enter(): boolean {
    return this.#enterKey.isDown;
  }
}
