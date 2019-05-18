import { IMap } from '../IMap'
import { ICoordinates } from '../utils'

export interface IActor {
  tryMove: (x: number, y: number, map: IMap) => ICoordinates
}
