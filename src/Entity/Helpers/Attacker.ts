import { Entity } from '../Entity'

export class Attacker {
  attackPower: number = 1

  constructor(attackPower: number) {
    this.attackPower = attackPower
  }

  attack = <T extends Entity>(target: T) => {
    if (target.hp) {
      target.takeDamage(this.attackPower)
    }
  }
}
