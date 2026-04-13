import { AUTO, Types } from 'phaser';

import { scenes } from '../scenes';

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 768,
  height: 768,
  pixelArt: true,
  roundPixels: true,
  parent: 'game-container',
  backgroundColor: '#000000',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: true,
    },
  },
  scene: scenes,
};

export default config;
