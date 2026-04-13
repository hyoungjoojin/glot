import { CHARACTER_STATE_NAMES, CharacterState } from '.';
import { DIRECTIONS, Direction } from '../../../types/physics';
import { isArcadePhysicsBody } from '../../../utils/phaser';
import Character from '../character';

export class MoveState extends CharacterState {
  constructor(character: Character) {
    super(CHARACTER_STATE_NAMES.MOVE_STATE, character);
  }

  public onUpdate() {
    const controls = this._character.controls;

    if (controls.up) {
      this.#move(DIRECTIONS.UP);
    } else if (controls.down) {
      this.#move(DIRECTIONS.DOWN);
    } else if (controls.left) {
      this.#move(DIRECTIONS.LEFT);
    } else if (controls.right) {
      this.#move(DIRECTIONS.RIGHT);
    } else {
      this.#stop();
      this.context.transition(CHARACTER_STATE_NAMES.IDLE_STATE);
    }
  }

  #move(direction: Direction) {
    if (!isArcadePhysicsBody(this._character.body)) {
      return;
    }

    this.#updateDirection(direction);

    switch (direction) {
      case DIRECTIONS.UP:
        this._character.body.velocity.x = 0;
        this._character.body.velocity.y = -1;
        break;

      case DIRECTIONS.DOWN:
        this._character.body.velocity.x = 0;
        this._character.body.velocity.y = 1;
        break;

      case DIRECTIONS.LEFT:
        this._character.body.velocity.x = -1;
        this._character.body.velocity.y = 0;
        break;

      case DIRECTIONS.RIGHT:
        this._character.body.velocity.x = 1;
        this._character.body.velocity.y = 0;
        break;
    }
  }

  #stop() {
    if (!isArcadePhysicsBody(this._character.body)) {
      return;
    }

    this._character.body.velocity.x = 0;
    this._character.body.velocity.y = 0;
  }

  #updateDirection(direction: Direction) {
    switch (direction) {
      case DIRECTIONS.UP:
        this._character.playAnimation('WALK_UP');
        break;

      case DIRECTIONS.DOWN:
        this._character.playAnimation('WALK_DOWN');
        break;

      case DIRECTIONS.LEFT:
      case DIRECTIONS.RIGHT:
        this._character.playAnimation('WALK_SIDE');
        break;
    }

    if (direction === DIRECTIONS.LEFT) {
      this._character.setFlipX(true);
    } else if (direction === DIRECTIONS.RIGHT) {
      this._character.setFlipX(false);
    }
  }
}
