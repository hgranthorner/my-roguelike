import { Entity } from '../Entity'
import { Actor } from '../Helpers'
import { IEntityProperties, IMap } from '../../@types'

export class StationaryActor extends Entity {
  private readonly _actor = new Actor

  constructor(props: IEntityProperties) {
    super(props)
  }

  act = (map: IMap) => {
    this._actor.act(map)
  }
}
