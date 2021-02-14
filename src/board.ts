import { Robot } from './robot'
export class Board{
  dimension: Number
  constructor(dimension: Number){
    this.dimension = dimension
  }

  printBoard(robot: Robot) {
    for(let y = 0; y < this.dimension; y++){
      for(let x = 0; x < this.dimension; x++){
        if(robot.x === x && robot.y === y){
          process.stdout.write(`[A(${x},${y},${robot.facing})]`)
        } else {
          process.stdout.write('[            ]')
        }
      }
      console.log('')
    }
  }
  isOutside(x:Number, y:Number) {
    if(x < 0 || x >= this.dimension){
      return true
    }
    if(y < 0 || y >= this.dimension){
      return true
    }
    return false
  }
}