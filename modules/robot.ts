import { Command } from './commands/command'
export class Robot {
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
  isFalling(x: number, y: number) {
    if (x > -1 && x < 6 && y > -1 && y < 6) {
      return true
    } else {
      console.log('Robot falling with this command:', x, y)
      return false
    }
  }
}