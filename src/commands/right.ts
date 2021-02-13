import { Command } from './command';
import { Directions } from '../directions';
import { Robot } from "../robot";
export class Right extends Command {
  action(robot: Robot) {
    const facing = robot.facing
    let newFacing = facing
    switch (facing) {
      case 'NORTH':
        newFacing = Directions.EAST
        break;
      case 'SOUTH':
        newFacing = Directions.WEST
        break;
      case 'EAST':
        newFacing = Directions.SOUTH
        break
      case 'WEST':
        newFacing = Directions.NORTH
        break
      default:
        break;
    }
    return { x: robot.x, y: robot.y, facing: newFacing }
  }
}