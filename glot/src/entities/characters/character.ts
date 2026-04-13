import { Physics, Scene, Scenes } from 'phaser';

import { AnimationComponent, Animations } from '../../components/animation';
import { InputComponent } from '../../components/input';
import { State } from '../../managers/state';
import { Context } from '../../managers/state/context';
import { Position } from '../../types/physics';

export interface CharacterConfig {
  id?: string;
  position: Position;
  scene: Scene;
  assetKey: string;
  input: InputComponent;
  animations: Animations;
}

export default abstract class Character extends Physics.Arcade.Sprite {
  #context: Context;
  #animation: AnimationComponent;

  protected _input: InputComponent;

  constructor(config: CharacterConfig) {
    const {
      id,
      scene,
      position: { x, y },
      input,
      animations,
    } = config;

    super(scene, x, y, config.assetKey, 0);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);

    this.#context = new Context(id);
    this.#animation = new AnimationComponent(this, animations);

    this._input = input;

    scene.events.on(Scenes.Events.UPDATE, this.update, this);
    scene.events.once(Scenes.Events.SHUTDOWN, () => {
      scene.events.off(Scenes.Events.UPDATE, this.update, this);
    });
  }

  get id() {
    return this.#context.id;
  }

  get controls() {
    return this._input;
  }

  update() {
    this.#context.update();
  }

  protected registerStates(states: State[]) {
    this.#context.addStates(states);
  }

  protected transition(state: string) {
    this.#context.transition(state);
  }

  playAnimation(key: string) {
    this.#animation.play(key);
  }
}
