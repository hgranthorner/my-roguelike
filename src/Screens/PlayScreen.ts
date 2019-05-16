import * as ROT from 'rot-js'
import { IMap, IScreen } from '../@types'
import { ScreenBase } from './ScreenBase'
import { Map } from '../Map/Map'
import { HEIGHT, WIDTH } from '../Globals'
import { ScreenName } from '../Models'

export default class PlayScreen extends ScreenBase implements IScreen {
  private readonly map: IMap = new Map([[]], 100, 100)
  private _x: number = 0
  private _y: number = 0

  constructor() {
    super(ScreenName.PlayScreen)
    console.log('entering play screen')
  }

  render = (display: ROT.Display) => {
    this.map.generateMap()
    for (let x = 0; x < this.map.getWidth(); x++) {
      for (let y = 0; y < this.map.getHeight(); y++) {
        const glyph = this.map.getTile(x, y).getGlyph()
        display.draw(x, y,
          glyph.getChar(),
          glyph.getForeground(),
          glyph.getBackground())
      }
    }
  }

  moveScreen = (dX: number, dY: number) => {
    this._x = Math.max(0, Math.min(WIDTH - 1, this._x + dX))
    this._y = Math.max(0, Math.min(HEIGHT - 1, this._y + dY))
  }
}


