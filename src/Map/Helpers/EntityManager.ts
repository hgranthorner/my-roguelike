import { Entity } from '../../Entity'
import { GetEntityAt, IMap } from '../../@types'
import { scheduler } from './Engine'

export class EntityManager {
  private readonly _entities: Entity[]

  constructor() {
    this._entities = []
  }

  addEntity = <T extends Entity>(entity: T, map: IMap): void => {
    if (entity.x < 0 || entity.x >= map.getWidth() ||
      entity.y < 0 || entity.y >= map.getHeight()) {
      throw new Error('Adding entity out of bounds')
    }

    entity.map = map
    this._entities.push(entity)

    if (entity.actor) {
      map.getScheduler().add(entity, true)
    }
  }

  addEntityAtRandomPosition = <T extends Entity>(entity: T, map: IMap) => {
    const pos = map.getRandomFloorPosition()
    entity.x = pos.x
    entity.y = pos.y
    this.addEntity(entity, map)
  }


  getEntityAt: GetEntityAt = (x: number, y: number) => {
    for (let entity of this._entities) {
      if (entity.x === x && entity.y === y)
        return entity

    }

    return null
  }

  getEntities = () => this._entities

  removeEntity = <T extends Entity>(entity: T) => {
    for (let i = 0; i < this._entities.length; i++) {
      if (this._entities[i] === entity) {
        this._entities.splice(i, 1)
        break
      }
    }
    if (entity.actor) {
      scheduler.remove(entity)
    }
  }
}
