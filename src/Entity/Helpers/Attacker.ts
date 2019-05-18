import { Entity } from '../Entity'
import { messageHandler } from '../../MessageHandler'

export class Attacker {
  attackPower: number = 1

  constructor(attackPower: number) {
    this.attackPower = attackPower
  }

  attack = <T extends Entity>(target: T) => {
    if (target.hp) {
      messageHandler.addMessage(`You hit the ${target.name} for ${this.attackPower} damage.`)
      target.takeDamage(this.attackPower)
    }
  }
}
