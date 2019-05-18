import { IEntity, IEntityProperties } from '../@types'
import { Glyph } from '../Tile/Glyph'

export class Entity extends Glyph implements IEntity {
  name: string
  x: number
  y: number

  constructor(properties?: IEntityProperties) {
    super(properties)
    const props = properties || {} as IEntityProperties
    this.name = props.name || ''
    this.x = props.x || 0
    this.y = props.y || 0
  }
}
