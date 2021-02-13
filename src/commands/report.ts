import { Command } from './command';
import { Robot } from "../robot";
export class Report extends Command {
  action(robot: Robot) {
    console.log(`X: ${robot.x}, Y: ${robot.y}, F: ${robot.facing}`)
    return { x: robot.x, y: robot.y, facing: robot.facing }
  }
}