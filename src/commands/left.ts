import { Command } from './command'
import { Directions } from '../directions'
import { Robot } from "../robot"
export class Left extends Command {
  action(robot: Robot) {
    const facing = robot.facing
    let newFacing = facing
    switch (facing) {
      case Directions.NORTH:
        newFacing = Directions.WEST
        break
      case Directions.SOUTH:
        newFacing = Directions.EAST
        break
      case Directions.EAST:
        newFacing = Directions.NORTH
        break
      case Directions.WEST:
        newFacing = Directions.SOUTH
        break
      default:
        break
    }
    return { x: robot.x, y: robot.y, facing: newFacing }
  }
}