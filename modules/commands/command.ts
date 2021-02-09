export abstract class Command {
  x: number = 0;
  y: number = 0;
  facing: string = 'NORTH'
  name: string
  constructor(name:string) {
    this.name = name
  }
  action(x: number, y:number, facing:string){
    return {
      x: this.x,
      y: this.y,
      facing: this.facing
    }
}
}

export class Place extends Command {
  constructor(name:string){
    super(name)
  }
  action(x: number, y:number, facing:string){
    return {x, y, facing}
  }
}

export class Move extends Command {
  action(x: number, y:number, facing:string){
    switch (facing) {
      case 'NORTH':
        y = y-1
        break;
      case 'SOUTH':
        y = y+1
        break;
      case 'EAST':
        x = x-1
        break
      case 'WEST':
        x = x+1
        break
      default:
        break;
    }
  return{x, y, facing}
  }
}