import { InputComponent } from '../../components/input';
import { ASSET_KEYS, PLAYER_ANIMATION_KEYS } from '../../constants/assets';
import { Position } from '../../types/physics';
import Character from './character';
import { CHARACTER_STATE_NAMES } from './state';
import { IdleState } from './state/idle';
import { MoveState } from './state/move';

const PLAYER_ANIMATIONS = {
  IDLE_DOWN: {
    key: PLAYER_ANIMATION_KEYS.IDLE_DOWN,
    repeat: -1,
  },
  IDLE_UP: {
    key: PLAYER_ANIMATION_KEYS.IDLE_UP,
    repeat: -1,
  },
  IDLE_LEFT: {
    key: PLAYER_ANIMATION_KEYS.IDLE_SIDE,
    repeat: -1,
  },
  IDLE_RIGHT: {
    key: PLAYER_ANIMATION_KEYS.IDLE_SIDE,
    repeat: -1,
  },
  WALK_DOWN: {
    key: PLAYER_ANIMATION_KEYS.WALK_DOWN,
    repeat: -1,
  },
  WALK_UP: {
    key: PLAYER_ANIMATION_KEYS.WALK_UP,
    repeat: -1,
  },
  WALK_SIDE: {
    key: PLAYER_ANIMATION_KEYS.WALK_SIDE,
    repeat: -1,
  },
};

interface PlayerConfig {
  id?: string;
  position: Position;
  scene: Phaser.Scene;
  input: InputComponent;
}

export default class Player extends Character {
  constructor(config: PlayerConfig) {
    const { id, position, scene, input } = config;

    super({
      id,
      position,
      scene,
      assetKey: ASSET_KEYS.PLAYER,
      input,
      animations: PLAYER_ANIMATIONS,
    });

    this.registerStates([new IdleState(this), new MoveState(this)]);
    this.transition(CHARACTER_STATE_NAMES.IDLE_STATE);
  }
}
