import { Tile } from '../Tile/Tile'

export interface IMap {
  getWidth: () => number
  getHeight: () => number
  getTile: (x: number, y:number) => Tile
  generateMap: () => void
  isInitialized: () => boolean
}
