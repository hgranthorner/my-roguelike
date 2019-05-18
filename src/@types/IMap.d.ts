import * as ROT from 'rot-js'
import { Tile } from '../Tile/Tile'
import { ICoordinates } from './utils'
import { Entity, MovingActor, StationaryActor } from '../Entity'
import { Maybe } from './index'
import Scheduler from 'rot-js/lib/scheduler/scheduler'

type GetEntityAt = (x: number, y: number) => Maybe<Entity>

export interface IMap {
  player: MovingActor
  getWidth: () => number
  getHeight: () => number
  getTile: (x: number, y: number) => Tile
  generateMap: () => void
  isInitialized: () => boolean
  getRandomFloorPosition: () => ICoordinates
  dig: (x: number, y: number) => void
  getEngine: () => ROT.Engine
  getEntities: () => Entity[]
  getEntityAt: GetEntityAt
  getScheduler: () => Scheduler
}
