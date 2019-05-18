import { IMap } from '../@types'
import { Constructor } from './applyMixins'

export function Moveable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    canMove = (x: number, y: number, map: IMap) => {
      const tile = map.getTile(x, y)
      if (tile.isWalkable()) {
        return true
      }

      return false
    }
  }
}
