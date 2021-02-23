import { Robot } from './robot'
export class Board{
  dimension: Number
  obstacles: Array<string>
  constructor(dimension: Number){
    this.dimension = dimension
    this.obstacles = []
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
  putObstacle(x:Number, y:Number){
    if(x > this.dimension || y > this.dimension){
      console.log('obstacle is outside of the board')
      throw new Error('Illegal obstacle place')
    }
    if(this.obstacles.indexOf(`${x}-${y}`) > -1){
      console.log('obstacle existed')
      throw new Error('Illegal obstacle place')
    }
    this.obstacles.push(`${x}-${y}`)
    return this.obstacles
  }
  isOnObstacle(x:Number, y:Number){
    if(this.obstacles.indexOf(`${x}-${y}`) > -1){
      console.log('Robot stepped on to the board')
      return true
    } else {
      return false
    }
  }
}