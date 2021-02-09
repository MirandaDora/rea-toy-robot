import * as sinon from 'sinon';
import * as chai from 'chai';
import { Place, Move } from '../commands/command';

const expect = chai.expect;

describe('Commands', () => {
  describe('PLACE', () => {
    it('should place the robot', () => {
      const PLACE = new Place('PLACE')
      expect(PLACE.action(0, 0, 'NORTH')).to.deep.equal({ x: 0, y: 0, facing: 'NORTH' })
    })
  })
  describe('MOVE', ()=> {
    it('Should move', () => {
      const MOVE = new Move('MOVE')
      expect(MOVE.action(1,1,'SOUTH')).to.deep.equal({ x: 1, y: 2, facing: 'SOUTH' })
    })
  })
})