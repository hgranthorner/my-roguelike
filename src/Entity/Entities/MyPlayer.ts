import { Entity } from '../Entity'
import { IEntityProperties, IMap } from '../../@types'
import { Actor, Mover } from '../Helpers'
import { Attacker } from '../Helpers/Attacker'
import { Destructible } from '../Helpers/Destructible'

export class MyPlayer extends Entity {
  readonly _mover: Mover = new Mover
  readonly actor: Actor = new Actor
  readonly attacker: Attacker = new Attacker(1)
  readonly defenses: Destructible = new Destructible(10)

  constructor(props: IEntityProperties) {
    super(props)
  }

  attack = <T extends Entity>(target: T) => {
    this.attacker.attack(target)
  }

  takeDamage = (damage: number) => {
    const newHP = this.defenses.takeDamage(damage)
    if (newHP <= 0 && this.map) {
      this.map.removeEntity(this)
    }
  }

  tryMove = (x: number, y: number, map: IMap) => {
    const res = this._mover.tryMove(x, y, map)

    if (res.target) {
      console.log('there is a target')
      this.attack(res.target)
      res.target.takeDamage(this.attacker.attackPower)
    } else if (res.success) {
      this.x = res.x
      this.y = res.y
    }
  }

  dig = () => {
    if (this.map) {
      const { x, y } = this
      this.map!.dig(x + 1, y)
      this.map!.dig(x - 1, y)
      this.map!.dig(x, y + 1)
      this.map!.dig(x, y - 1)
      this.map!.getEngine().unlock()
    }
  }

  act = () => {
    return this.actor.act()
  }
}


