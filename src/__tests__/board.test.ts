import * as chai from 'chai'
import { Board } from '../board'
import { Robot } from '../robot'
import { Directions } from '../directions'
const expect = chai.expect

describe('Board', () => {
  describe('printBoard()', () => {
    const board = new Board(5)
    it('Should print board', () => {
      const robot = new Robot(1, 3, Directions.NORTH, 'A')
      board.printBoard(robot)
    })
  })
  describe('isOutside()', () => {
    const board = new Board(5)
    it('Should return true if falling', () => {
      expect(board.isOutside(-1, 2)).to.be.true // tslint:disable-line
      expect(board.isOutside(0, 6)).to.be.true // tslint:disable-line
      expect(board.isOutside(5, 5)).to.be.true // tslint:disable-line
    })
    it('Should return false if is inside board', () => {
      expect(board.isOutside(0, 0)).to.be.false // tslint:disable-line
      expect(board.isOutside(4, 4)).to.be.false // tslint:disable-line
      expect(board.isOutside(2, 2)).to.be.false // tslint:disable-line
    })
  })
})