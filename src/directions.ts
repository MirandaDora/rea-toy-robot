export enum Directions {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
  EAST = 'EAST'
}

export function getDirection(facing: string): Directions {
  switch (facing) {
    case 'NORTH':
      return Directions.NORTH
    case 'SOUTH':
      return Directions.SOUTH;
    case 'WEST':
      return Directions.WEST;
    case 'EAST':
      return Directions.EAST;
    default:
      console.log('Invalid direction')
      throw new Error('invalid direction')
  }
}