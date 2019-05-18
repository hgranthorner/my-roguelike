import { IGlyph } from '../@types'
import { Glyph } from './Glyph'
import { ITileProperties } from '../@types/ITile'

export class Tile {
  private readonly _glyph: IGlyph
  private readonly _isWalkable: boolean = false
  private readonly _isDiggable: boolean = true

  constructor(properties?: ITileProperties) {
    this._glyph = new Glyph(properties)
    if (properties) {
      this._isDiggable = properties.isDiggable || false
      this._isWalkable = properties.isWalkable || true
    }

  }

  getGlyph = () => this._glyph
  isWalkable = () => this._isWalkable
  isDiggable = () => this._isDiggable
}

export const nullTile = () => new Tile()
export const floorTile = () => new Tile({ character: '.', isWalkable: true })
export const wallTile = () => new Tile({ character: '#', foreground: 'goldenrod', isWalkable: true })
