import { IGlyph } from '../@types'
import { Glyph } from './Glyph'

export class Tile {
  private readonly glyph: IGlyph

  constructor(_glyph: IGlyph) {
    this.glyph = _glyph
  }

  getGlyph = () => this.glyph
}

export const nullTile = () => new Tile(new Glyph())
export const floorTile = () => new Tile(new Glyph('.'))
export const wallTile = () => new Tile(new Glyph('#', 'goldenrod'))
