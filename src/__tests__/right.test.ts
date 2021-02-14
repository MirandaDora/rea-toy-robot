import * as chai from 'chai'
import { Right } from '../commands'
import { Robot } from '../robot'
import { Directions } from '../directions'

const expect = chai.expect


describe('RIGHT', () => {
  it('Should turn right', () => {
    const RIGHT = new Right()
    expect(RIGHT.action(new Robot(1, 1, Directions.SOUTH, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.WEST })
    expect(RIGHT.action(new Robot(1, 1, Directions.EAST, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.SOUTH })
    expect(RIGHT.action(new Robot(1, 1, Directions.WEST, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.NORTH })
    expect(RIGHT.action(new Robot(1, 1, Directions.NORTH, 'A'))).to.deep.equal({ x: 1, y: 1, facing: Directions.EAST })
  })
})