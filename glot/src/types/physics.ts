export type Position = {
  x: number;
  y: number;
};

export const DIRECTIONS = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
} as const;

export type Direction = (typeof DIRECTIONS)[keyof typeof DIRECTIONS];
