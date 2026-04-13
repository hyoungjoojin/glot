import { State } from '../../../managers/state';
import { Context } from '../../../managers/state/context';
import Character from '../character';

export abstract class CharacterState implements State {
  #name: string;
  context: Context;

  protected _character: Character;

  constructor(name: string, character: Character) {
    this.#name = name;
    this._character = character;
  }

  get name() {
    return this.#name;
  }
}

export const CHARACTER_STATE_NAMES = {
  IDLE_STATE: 'idle',
  MOVE_STATE: 'move',
} as const;
