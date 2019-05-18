import { IGlyphProperties } from './IGlyph'

export interface IEntityProperties extends IGlyphProperties {
  name?: string
  x?: number
  y?: number
  isInitialized?: boolean
}
