### case 1 ###
MOVE
TEST
PLACE 2,3,SOUTH
LEFT
MOVE
REPORT
(X: 3, Y: 3, F: EAST)
LEFT
MOVE
REPORT
(X: 3, Y: 4, F: NORTH)

### case 2 ###
PLACE -1,0,EAST
LEFT
PLACE 1,1,WEST (valid)
MOVE
MOVE (fall)
LEFT
MOVE
REPORT
(X: 0, Y: 0, F: SOUTH)
PLACE 5,5,WEST (fall)