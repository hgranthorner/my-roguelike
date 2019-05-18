import { Entity } from '../Entity'
import { IEntityProperties, IMap } from '../../@types'
import { Actor, Mover } from '../Helpers'

export class MovingActor extends Entity {
  private readonly _mover: Mover = new Mover
  readonly actor: Actor = new Actor

  constructor(props: IEntityProperties) {
    super(props)
  }

  tryMove = (x: number, y: number, map: IMap) => {
    const res = this._mover.tryMove(x, y, map)

    if (res.success) {
      this.x = res.x
      this.y = res.y
    }
  }

  act = () => {
    return this.actor.act()
  }
}


