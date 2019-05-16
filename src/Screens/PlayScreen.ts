import * as ROT from 'rot-js'
import { IMap, IScreen } from '../@types'
import { ScreenBase } from './ScreenBase'
import { Map } from '../Map/Map'

export default class PlayScreen extends ScreenBase implements IScreen {
  private readonly map: IMap = new Map([[]])

  constructor() {
    super('play')
    console.log('entering play screen')
  }

  render = (display: ROT.Display) => {
    for (let x = 0; x < this.map.getWidth(); x++) {
      for (let y = 0; y < this.map.getHeight(); y++) {
        console.log(this.map)
        const glyph = this.map.getTile(x, y).getGlyph()
        display.draw(x, y,
          glyph.getChar(),
          glyph.getForeground(),
          glyph.getBackground())
      }
    }
  }
}


