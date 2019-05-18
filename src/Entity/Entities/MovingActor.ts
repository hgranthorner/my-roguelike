import { Entity } from '../Entity'
import { IEntityProperties, IMap } from '../../@types'
import { Actor, Mover } from '../Helpers'

export class MovingActor extends Entity {
  private readonly _actor: Actor = new Actor
  private readonly _mover: Mover = new Mover

  constructor(props: IEntityProperties) {
    super(props)
    console.log(props)
    console.log(this.isInitialized)
  }

  tryMove = (x: number, y: number, map: IMap) => {
    const res = this._mover.tryMove(x, y, map)

    if (res.success) {
      this.x = res.x
      this.y = res.y
    }
  }

  act = (map: IMap) => {
    this._actor.act(map)
  }
}


