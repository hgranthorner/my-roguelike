import { Tile } from '../Tile/Tile'
import { ICoordinates } from './utils'

export interface IMap {
  getWidth: () => number
  getHeight: () => number
  getTile: (x: number, y: number) => Tile
  generateMap: () => void
  isInitialized: () => boolean

  getRandomFloorPosition: () => ICoordinates
  dig: (x: number, y: number) => void
}
