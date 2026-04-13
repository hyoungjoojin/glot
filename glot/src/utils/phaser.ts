import { Physics } from 'phaser';

export function isArcadePhysicsBody(
  body: Physics.Arcade.Body | Physics.Arcade.StaticBody | null,
): body is Physics.Arcade.Body {
  if (body === undefined || body === null) {
    return false;
  }

  return body instanceof Physics.Arcade.Body;
}
