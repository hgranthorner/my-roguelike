import { IMap } from '../../@types'

export class Actor {
  act = (map: IMap) => {
    map.getEngine().lock()
  }
}
