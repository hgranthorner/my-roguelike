import { IGlyph } from '../@types'
import { Glyph } from './Glyph'
import { ITileProperties } from '../@types/ITile'
import { defaultFalse, defaultTrue } from '../utils'

export class Tile {
  private readonly _glyph: IGlyph
  private readonly _isWalkable: boolean
  private readonly _isDiggable: boolean
  private readonly _props: ITileProperties
  isWall: boolean = false
  isFloor: boolean = false

  constructor(properties?: ITileProperties) {
    this._glyph = new Glyph(properties)
    this._props = properties || {} as ITileProperties
    this._isDiggable = defaultTrue(this._props.isDiggable)

    this._isWalkable = defaultTrue(this._props.isWalkable)
    this.isFloor = defaultFalse(this._props.isFloor)
    this.isWall = defaultFalse(this._props.isWall)
  }

  getGlyph = () => this._glyph
  isWalkable = () => {
    return this._isWalkable
  }
  isDiggable = () => this._isDiggable
}

export const nullTile = () => new Tile()
export const floorTile = () => new Tile({ character: '.', isWalkable: true, isFloor: true })
export const wallTile = () => new Tile({ character: '#', foreground: 'goldenrod', isWalkable: false, isWall: true })
