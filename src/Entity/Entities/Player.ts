// import { Entity } from '../Entity'
// import { Actor, Mover } from '../Helpers'
// // import { Attacker } from '../Helpers/Attacker'
// // import { Destructible } from '../Helpers/Destructible'
// import { IEntityProperties, IMap } from '../../@types'
//
// class Player extends Entity {
//   readonly actor: Actor = new Actor
//   readonly mover: Mover = new Mover
//   // readonly attacker: Attacker = new Attacker(1)
//   // readonly defenses: Destructible = new Destructible(10)
//
//   constructor(props: IEntityProperties) {
//     super(props)
//   }
//
//   // attack = <T extends Entity>(target: T) => {
//   //   this.attacker.attack(target)
//   // }
//   //
//   // takeDamage = (damage: number) => {
//   //   this.defenses.takeDamage(damage)
//   // }
//
//   tryMove = (x: number, y: number, map: IMap) => {
//     const res = this._mover.tryMove(x, y, map)
//
//     if (res.success) {
//       this.x = res.x
//       this.y = res.y
//     }
//   }
//
//   act = () => {
//     return this.actor.act()
//   }
// }
