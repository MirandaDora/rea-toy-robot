import { Command } from './command'
import { Directions } from '../directions'
import { Robot } from "../robot"
export class PlaceObject extends Command {
  action(robot: Robot) {
    const facing = robot.facing
    let x = robot.x
    let y = robot.y
    switch (facing) {
      case Directions.NORTH:
        y = y + 1
        break
      case Directions.SOUTH:
        y = y - 1
        break
      case Directions.EAST:
        x = x + 1
        break
      case Directions.WEST:
        x = x - 1
        break
      default:
        break
    }
    return { x, y, facing }
  }
}