import { Command } from './command'
import { getDirection } from '../directions'
import { Robot } from "../robot"
export class Place extends Command {
  parseCommand(commandString: string) {
    // name, x, y, direction
    try {
      if (!commandString.startsWith('PLACE')) {
        throw new Error('Invalid place command')
      }
      const commandStringArray = commandString.replace('PLACE', '').replace(/\s/g, '').split(',')
      return {
        name: 'PLACE',
        x: parseInt(commandStringArray[0], 10),
        y: parseInt(commandStringArray[1], 10),
        facing: getDirection(commandStringArray[2])
      }
    } catch (error) {
      console.log('Type error of Place command, please try again!', error)
      throw new Error('Invalid command')
    }
  }
  action(robot: Robot) {
    return { x: robot.x, y: robot.y, facing: robot.facing }
  }
}