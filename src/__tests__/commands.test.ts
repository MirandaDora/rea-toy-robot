import * as chai from 'chai';
import { Place, Move, Left, Right } from '../commands';
import { Robot } from '../robot'
import {Directions} from '../directions'

const expect = chai.expect;

describe('Commands', () => {
  describe('PLACE', () => {
    it('should place the robot', () => {

  const robot = new Robot(0,0,Directions.NORTH)
      const PLACE = new Place()
      expect(PLACE.action(robot)).to.deep.equal({ x: 0, y: 0, facing: 'NORTH' })
    })
  })
  describe('MOVE', ()=> {
    it('Should move', () => {
      const MOVE = new Move()
      expect(MOVE.action(new Robot(1,1,Directions.SOUTH))).to.deep.equal({ x: 1, y: 0, facing: 'SOUTH' })
      expect(MOVE.action(new Robot(1,1,Directions.EAST))).to.deep.equal({ x: 2, y: 1, facing: 'EAST' })
      expect(MOVE.action(new Robot(1,1,Directions.WEST))).to.deep.equal({ x: 0, y: 1, facing: 'WEST' })
      expect(MOVE.action(new Robot(1,1,Directions.NORTH))).to.deep.equal({ x: 1, y: 2, facing: 'NORTH' })
    })
  })
  describe('PLACE', ()=> {
    it('parseCommand should parse string command', () => {
      const PLACE = new Place()
      expect(PLACE.parseCommand('PLACE 1,1,SOUTH')).to.deep.equal({name: 'PLACE', x: 1, y: 1, facing: 'SOUTH'})
      expect(PLACE.parseCommand('PLACE -1,0,NORTH')).to.deep.equal({name: 'PLACE', x: -1, y: 0, facing: 'NORTH'})
      expect(PLACE.parseCommand('PLACE -1.2,100,NORTH')).to.deep.equal({name: 'PLACE', x: -1, y: 100, facing: 'NORTH'})
    })
  })
  describe('LEFT', ()=> {
    it('Should turn left', () => {
      const LEFT = new Left()
      expect(LEFT.action(new Robot(1,1,Directions.SOUTH))).to.deep.equal({ x: 1, y: 1, facing: Directions.EAST })
      expect(LEFT.action(new Robot(1,1,Directions.EAST))).to.deep.equal({ x: 1, y: 1, facing: Directions.NORTH })
      expect(LEFT.action(new Robot(1,1,Directions.WEST))).to.deep.equal({ x: 1, y: 1, facing: Directions.SOUTH })
      expect(LEFT.action(new Robot(1,1,Directions.NORTH))).to.deep.equal({ x: 1, y: 1, facing: Directions.WEST })
    })
  })
  describe('RIGHT', ()=> {
    it('Should turn right', () => {
      const RIGHT = new Right()
      expect(RIGHT.action(new Robot(1,1,Directions.SOUTH))).to.deep.equal({ x: 1, y: 1, facing: Directions.WEST })
      expect(RIGHT.action(new Robot(1,1,Directions.EAST))).to.deep.equal({ x: 1, y: 1, facing: Directions.SOUTH })
      expect(RIGHT.action(new Robot(1,1,Directions.WEST))).to.deep.equal({ x: 1, y: 1, facing: Directions.NORTH })
      expect(RIGHT.action(new Robot(1,1,Directions.NORTH))).to.deep.equal({ x: 1, y: 1, facing: Directions.EAST })
    })
  })
})