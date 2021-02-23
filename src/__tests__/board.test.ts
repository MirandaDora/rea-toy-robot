import * as chai from 'chai'
import { Board } from '../board'
const expect = chai.expect

describe('Board', () => {
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

  describe('putObstacle()', ()=> {
    const board = new Board(5)
    it('Should place obstacle', ()=>{
      expect(board.putObstacle(1, 2)).to.deep.equal(['1-2'])
      try {
        board.putObstacle(1, 2)//obstacle existed
      } catch (error) {
        expect(error.message).to.equal('Illegal obstacle place')
      }
      // expect(board.putObstacle(6, 2)).to.throw(new Error('Illegal obstacle place')) //obstacle is outside of the board
    })
    it('Should return true if stepped on obstacle', () => {
      expect(board.isOnObstacle(1, 2)).to.be.true
      expect(board.isOnObstacle(3, 4)).to.be.false
    })
  })
})