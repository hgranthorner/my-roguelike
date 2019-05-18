export class Destructible {
  private _hp: number

  constructor(hp: number) {
    this._hp = hp
  }

  takeDamage = (damage: number) => {
    this._hp -= damage
    return this._hp
  }

  getHp = () => this._hp
}
