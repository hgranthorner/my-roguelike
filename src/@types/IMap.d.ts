import * as ROT from 'rot-js'
import { Tile } from '../Tile/Tile'
import { ICoordinates } from './utils'
import { Entity } from '../Entity'
import { Maybe } from './index'
import Scheduler from 'rot-js/lib/scheduler/scheduler'
// import { Player } from '../Entity/Entities/Player'
import { MyPlayer } from '../Entity/Entities/MyPlayer'

type GetEntityAt = (x: number, y: number) => Maybe<Entity>

export interface IMap {
  // player: MovingActor
  // player: Player
  player: MyPlayer
  getWidth: () => number
  getHeight: () => number
  getTile: (x: number, y: number) => Tile
  generateMap: () => void
  isInitialized: () => boolean
  getRandomFloorPosition: () => ICoordinates
  dig: (x: number, y: number) => void
  addEntity: <T extends Entity>(entity: T) => void
  getEngine: () => ROT.Engine
  getEntities: () => Entity[]
  getEntityAt: GetEntityAt
  removeEntity: <T extends Entity>(entity: T) => void
  getScheduler: () => Scheduler
  isEmptyFloor: (x: number, y: number) => boolean
}
