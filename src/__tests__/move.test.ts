import * as chai from 'chai'
import { Move } from '../commands'
import { Robot } from '../robot'
import { Directions } from '../directions'
const expect = chai.expect

describe('MOVE', () => {
  it('Should move', () => {
    const MOVE = new Move()
    expect(MOVE.action(new Robot(1, 1, Directions.SOUTH, 'A'))).to.deep.equal({ x: 1, y: 0, facing: 'SOUTH' })
    expect(MOVE.action(new Robot(1, 1, Directions.EAST, 'A'))).to.deep.equal({ x: 2, y: 1, facing: 'EAST' })
    expect(MOVE.action(new Robot(1, 1, Directions.WEST, 'A'))).to.deep.equal({ x: 0, y: 1, facing: 'WEST' })
    expect(MOVE.action(new Robot(1, 1, Directions.NORTH, 'A'))).to.deep.equal({ x: 1, y: 2, facing: 'NORTH' })
  })
})