import { IMap } from '../../@types'

export class Mover {
  tryMove = (x: number, y: number, map: IMap) => {
    const tile = map.getTile(x, y)
    const target = map.getEntityAt(x, y)

    if (target) {
      return { x, y , success: false, target }
    } else if (tile.isWalkable()) {
      return { x, y, success: true }
    // } else if (tile.isDiggable()) {
    //   map.dig(x, y)
    //   return { x, y, success: true }
    }

    return { x, y, success: false }
  }
}

