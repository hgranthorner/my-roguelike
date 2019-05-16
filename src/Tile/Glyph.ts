import { IGlyph } from '../@types'

export class Glyph implements IGlyph {
  private readonly char: string = ' '
  private readonly foreground: string = 'white'
  private readonly background: string = 'black'

  constructor(_char?: string, _foreground?: string, _background?: string) {
    if (_char)
      this.char = _char
    if (_foreground)
      this.foreground = _foreground
    if (_background)
      this.background = _background
  }

  getChar = () => this.char
  getForeground = () => this.foreground
  getBackground = () => this.background
}

