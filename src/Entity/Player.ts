import { Moveable } from '../Mixins'
import { Entity } from './Entity'

export const Player = Moveable(Entity)

export const PlayerTemplate = {
  character: '@',
  foreground: 'white',
  background: 'black'
}

export const myPlayer = new Player(PlayerTemplate)



