import {Directions} from './directions'
export class Robot {
  x: number = 0
  y: number = 0
  facing: Directions = Directions.NORTH
  name: string = 'A'
  constructor(x: number, y: number, facing: Directions, name: string) {
    this.x = x
    this.y = y
    this.facing = facing
    this.name = name
  }
  takeAction(x: number, y: number, facing: Directions) {
    this.x = x
    this.y = y
    this.facing = facing
  }
}