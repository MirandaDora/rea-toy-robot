import { Robot } from "../robot"
import { Directions, getDirection } from '../directions'
export abstract class Command {
  action(robot:Robot) {
    return {
      x: robot.x,
      y: robot.y,
      facing: robot.facing
    }
  }
}
