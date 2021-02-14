
import * as chai from 'chai'
import { Place } from '../commands'

const expect = chai.expect

describe('PLACE', () => {
  it('parseCommand should parse string command', () => {
    const PLACE = new Place()
    expect(PLACE.parseCommand('PLACE 1,1,SOUTH')).to.deep.equal({ name: 'PLACE', x: 1, y: 1, facing: 'SOUTH' })
    expect(PLACE.parseCommand('PLACE -1,0,NORTH')).to.deep.equal({ name: 'PLACE', x: -1, y: 0, facing: 'NORTH' })
    expect(PLACE.parseCommand('PLACE -1.2,100,NORTH')).to.deep.equal({ name: 'PLACE', x: -1, y: 100, facing: 'NORTH' })
  })
})