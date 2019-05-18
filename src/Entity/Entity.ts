import { IEntityProperties } from '../@types'
import { Glyph } from '../Tile/Glyph'
import { defaultTrue } from '../utils'

export class Entity extends Glyph {
  name: string
  x: number
  y: number
  isInitialized: boolean

  constructor(properties?: IEntityProperties) {
    super(properties)
    const props = properties || {} as IEntityProperties
    this.name = props.name || ''
    this.x = props.x || 0
    this.y = props.y || 0
    this.isInitialized = defaultTrue(props.isInitialized)
  }
}
