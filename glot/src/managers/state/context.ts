import { Math } from 'phaser';

import { logger } from '../../utils/logger';
import { State } from './';

export class Context {
  #id: string;
  #states: Map<string, State>;
  #currentState: State | null;
  #stateQueue: string[];
  #isTransitioning: boolean;

  constructor(id?: string) {
    this.#id = id ?? Math.RND.uuid();
    this.#states = new Map<string, State>();
    this.#currentState = null;
    this.#isTransitioning = false;
    this.#stateQueue = [];
  }

  public transition(name: string) {
    if (!this.#states.has(name)) {
      logger.debug(`State "${name}" does not exist in context ${this.#id}`);
      return;
    }

    if (this.#currentState?.name === name) {
      logger.debug(`Already in state "${name}" in context ${this.#id}`);
      return;
    }

    if (this.#isTransitioning) {
      logger.debug(
        `Currently transitioning in context ${this.#id}, queuing state "${name}"`,
      );
      this.#stateQueue.push(name);
      return;
    }

    this.#isTransitioning = true;
    logger.debug(`Transitioning to state "${name}" in context ${this.#id}`);

    this.#currentState = this.#states.get(name)!;
    logger.debug(`Entering state "${name}" in context ${this.#id}`);

    if (this.#currentState.onEnter) {
      logger.debug(
        `Calling onEnter for state "${name}" in context ${this.#id}`,
      );
      this.#currentState.onEnter();
    }

    this.#isTransitioning = false;
  }

  public update() {
    const next = this.#stateQueue.shift();
    if (next) {
      logger.debug(`Processing queued state "${next}" in context ${this.#id}`);
      this.transition(next);
    }

    if (this.#currentState?.onUpdate) {
      this.#currentState.onUpdate();
    }
  }

  public addStates(states: State[]) {
    for (const state of states) {
      state.context = this;
      this.#states.set(state.name, state);
    }
  }

  public get id(): string {
    return this.#id;
  }
}
