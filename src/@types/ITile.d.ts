import { IGlyph, IGlyphProperties } from './IGlyph'

export interface ITileProperties extends IGlyphProperties {
  isWalkable?: boolean
  isDiggable?: boolean
  isFloor?: boolean
  isWall?: boolean
  blocksLight?: boolean
}
