import { CHARACTER_STATE_NAMES, CharacterState } from '.';
import Character from '../character';

export class IdleState extends CharacterState {
  constructor(character: Character) {
    super(CHARACTER_STATE_NAMES.IDLE_STATE, character);
  }

  public onUpdate() {
    const controls = this._character.controls;
    if (controls.up || controls.down || controls.left || controls.right) {
      this.context.transition(CHARACTER_STATE_NAMES.MOVE_STATE);
    }
  }
}
