import { Entity } from './Entity'
import { IEntityProperties, IMap } from '../@types'

// export const Player = Moveable(Entity)
//
export const PlayerTemplate = {
  character: '@',
  foreground: 'white',
  background: 'black',
  isInitialized: false
}
//
// export const myPlayer = new Player(PlayerTemplate)

export class Player extends Entity {
  constructor(props: IEntityProperties) {
    super(props)
    console.log(props)
    console.log(this.isInitialized)
  }

  tryMove = (x: number, y: number, map: IMap) => {
    const tile = map.getTile(x, y)
    if (tile.isWalkable()) {
      this.x = x
      this.y = y
      return true
    }

    return false
  }
}


