import { Robot } from './robot'
export class Board{
  dimension: Number
  constructor(dimension: Number){
    this.dimension = dimension
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