import { IMap } from '../../@types'

export class Mover {
  tryMove = (x: number, y: number, map: IMap) => {
    const tile = map.getTile(x, y)
    const entity = map.getEntityAt(x, y)

    if (entity) {
      return { x, y , success: false }
    } else if (tile.isWalkable()) {
      return { x, y, success: true }
    } else if (tile.isDiggable()) {
      map.dig(x, y)
      return { x, y, success: true }
    }

    return { x, y, success: false }
  }
}
