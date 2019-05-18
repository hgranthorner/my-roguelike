export interface IGlyph {
  getChar: () => string
  getBackground: () => string
  getForeground: () => string
}

export interface IGlyphProperties {
  character?: string
  foreground?: string
  background?: string
}
