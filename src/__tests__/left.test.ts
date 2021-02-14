import * as chai from 'chai'
import { Left } from '../commands'
import { Robot } from '../robot'
import { Directions } from '../directions'

const expect = chai.expect

describe('LEFT', () => {
  it('Should turn left', () => {
    const LEFT = new Left()
    expect(LEFT.action(new Robot(1, 1, Directions.SOUTH, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.EAST })
    expect(LEFT.action(new Robot(1, 1, Directions.EAST, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.NORTH })
    expect(LEFT.action(new Robot(1, 1, Directions.WEST, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.SOUTH })
    expect(LEFT.action(new Robot(1, 1, Directions.NORTH, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.WEST })
  })
})