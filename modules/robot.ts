import { Command } from './commands/command'
class Robot {
  x: number = 0;
  y: number = 0;
  facing: string = 'NORTH';
  constructor(x: number, y: number, facing: string) {
    this.x = x;
    this.y = y;
    this.facing = facing
  }
  takeAction(x: number, y: number, facing: string) {
    this.x = x;
    this.y = y;
    this.facing = facing
  }
  previewAction(command: Command) {
    const { x, y, facing } = command.action(this.x, this.y, this.facing)
    return { x, y, facing }
  }
  isFalling() {
    if (this.x > -1 && this.x < 6 && this.y > -1 && this.y < 6) {
      return true
    } else {
      return false
    }
  }
}