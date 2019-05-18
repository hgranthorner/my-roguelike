import { IGlyph, IGlyphProperties } from './IGlyph'

export interface ITile {
  getGlyph: () => IGlyph
}

export interface ITileProperties extends IGlyphProperties {
  isWalkable?: boolean
  isDiggable?: boolean
}
