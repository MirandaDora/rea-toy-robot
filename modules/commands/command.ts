export abstract class Command {
  x: number = 0;
  y: number = 0;
  facing: string = 'NORTH'
  name: string
  constructor(name: string) {
    this.name = name
  }
  action(x: number, y: number, facing: string) {
    return {
      x: this.x,
      y: this.y,
      facing: this.facing
    }
  }
}

export class Place extends Command {
  constructor(name: string) {
    super(name)
  }
  parseCommand(commandString: string) {
    // name, x, y, direction
    try {
      const commandStringArray = commandString.replace(/\s/g, '').split(',')
      return {
        name: commandStringArray[0],
        x: parseInt(commandStringArray[1]),
        y: parseInt(commandStringArray[2]),
        facing: commandStringArray[3]
      }
    } catch (error) {
      console.log('Type error of Place command, please try again!')
      throw new Error('Invalid command')
    }
  }
  action(x: number, y: number, facing: string) {
    return { x, y, facing }
  }
}

export class Move extends Command {
  action(x: number, y: number, facing: string) {
    switch (facing) {
      case 'NORTH':
        y = y - 1
        break;
      case 'SOUTH':
        y = y + 1
        break;
      case 'EAST':
        x = x - 1
        break
      case 'WEST':
        x = x + 1
        break
      default:
        break;
    }
    return { x, y, facing }
  }
}