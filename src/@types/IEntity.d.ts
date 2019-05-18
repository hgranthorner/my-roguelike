import { IGlyphProperties } from './IGlyph'

export interface IEntity {
  name: string
  x: number
  y: number
}

export interface IEntityProperties extends IGlyphProperties {
  name?: string
  x?: number
  y?: number
}
