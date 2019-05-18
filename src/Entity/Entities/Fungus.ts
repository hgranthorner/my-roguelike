import { Entity } from '../Entity'
import { IEntityProperties } from '../../@types'
import { Destructible } from '../Helpers/Destructible'
import { Actor } from '../Helpers'
import { FungusTemplate } from '../Templates'
import { messageHandler } from '../../MessageHandler'

export class Fungus extends Entity {
  private _growthsRemaining: number = 5
  readonly actor: Actor = new Actor
  readonly defenses: Destructible = new Destructible(Math.ceil(Math.random() * 3))

  constructor(props: IEntityProperties) {
    super(props)
  }

  takeDamage = (damage: number) => {
    const newHP = this.defenses.takeDamage(damage)
    if (newHP) {
      messageHandler.addMessage(`This fungus took damage ${damage}. Now has ${newHP} hp.`)
    } else {
      messageHandler.addMessage(`The fungus was destroyed!`)
    }
    if (newHP <= 0 && this.map) {
      this.map.removeEntity(this)
    }
  }

  act = () => {
    if (this._growthsRemaining) {
      if (Math.random() <= .1) {
        // Generate the coordinates of a random adjacent square by
        // generating an offset between [-1, 0, 1] for both the x and
        // y directions. To do this, we generate a number from 0-2 and then
        // subtract 1.
        const xOffset = Math.floor(Math.random() * 3) - 1
        const yOffset = Math.floor(Math.random() * 3) - 1
        // Make sure we aren't trying to spawn on the same tile as us
        if (xOffset != 0 || yOffset != 0) {
          // Check if we can actually spawn at that location, and if so
          // then we grow!
          console.log(`Trying to grow at ${this.x + xOffset} ${this.y + yOffset}`)
          console.log(`Can grow? ${this.map!.isEmptyFloor(this.x + xOffset,this.y + yOffset)}`)
          if (this.map!.isEmptyFloor(this.x + xOffset,
            this.y + yOffset)) {
            const entity = new Entity(FungusTemplate)
            entity.x = this.x + xOffset
            entity.y = this.y + yOffset
            this.map!.addEntity(entity)
            this._growthsRemaining--
            console.log(`Grew at ${entity.x} ${entity.y}! ${this._growthsRemaining} grows left.`)
          }
        }
      }
    }
    return this.actor.act()
  }
}
