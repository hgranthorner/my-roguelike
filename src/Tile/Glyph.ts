import { IGlyph, IGlyphProperties } from '../@types'

export const glyphDefaultProperties = {
  character: ' ',
  foreground: 'white',
  background: 'black'
}

export class Glyph implements IGlyph {
  private readonly _char: string = ' '
  private readonly _foreground: string = 'white'
  private readonly _background: string = 'black'
  private _properties: IGlyphProperties

  constructor(properties?: IGlyphProperties) {
    this._properties = properties || {} as IGlyphProperties
    this._char = this._properties.character || glyphDefaultProperties.character
    this._foreground = this._properties.foreground || glyphDefaultProperties.foreground
    this._background = this._properties.background || glyphDefaultProperties.background
  }

  getChar = () => this._char
  getForeground = () => this._foreground
  getBackground = () => this._background
}

// interface AnyObj { [key: string]: any };
// type SetDefault = <T extends AnyObj>(obj: AnyObj, def: T) => T & AnyObj;
// const setDefault: SetDefault = (obj, def) => {
//   return Object.keys(def).reduce<typeof def>((acc, key: string) => {
//     return {
//       ...acc,
//       [key]: obj[key],
//     };
//   }, def);
// }


