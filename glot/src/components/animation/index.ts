import Character from '../../entities/characters/character';

export interface Animations {
  [key: string]: {
    key: string;
    repeat: number;
    ignoreIfPlaying?: boolean;
  };
}

export class AnimationComponent {
  #character: Character;
  #animations: Animations;

  constructor(character: Character, animations: Animations) {
    this.#character = character;
    this.#animations = animations;
  }

  public play(animation: string) {
    if (!this.#animations[animation]) {
      console.warn(
        `Animation "${animation}" does not exist in AnimationComponent`,
      );
      return;
    }

    const { key, repeat, ignoreIfPlaying = true } = this.#animations[animation];
    this.#character.play({ key, repeat }, ignoreIfPlaying);
  }
}
