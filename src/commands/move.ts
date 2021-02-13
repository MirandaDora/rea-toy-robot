import { Command } from './command';
import { Directions } from '../directions';
import { Robot } from "../robot";
export class Move extends Command {
  action(robot: Robot) {
    let x = robot.x;
    let y = robot.y;
    const facing = robot.facing;
    switch (robot.facing) {
      case Directions.NORTH:
        y = y + 1;
        break;
      case Directions.SOUTH:
        y = y - 1;
        break;
      case Directions.EAST:
        x = x + 1;
        break;
      case Directions.WEST:
        x = x - 1;
        break;
      default:
        break;
    }
    return { x, y, facing }
  }
}