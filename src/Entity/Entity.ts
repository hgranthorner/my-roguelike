import { IEntityProperties, IMap, Maybe } from '../@types'
import { Glyph } from '../Tile/Glyph'
import { defaultTrue } from '../utils'

export class Entity extends Glyph {
  [key: string]: any
  name: string
  x: number
  y: number
  isInitialized: boolean
  map: Maybe<IMap>

  constructor(properties?: IEntityProperties) {
    super(properties)
    const props = properties || {} as IEntityProperties
    this.name = props.name || ''
    this.x = props.x || 0
    this.y = props.y || 0
    this.isInitialized = defaultTrue(props.isInitialized)
  }

  // maybe need to use function here?
  hasHelper = (helperName: string) => {
    if (this[helperName]) return true
    else return false
  }
}

export class EntityDescendant extends Entity {

}
