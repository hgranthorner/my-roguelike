import * as ROT from 'rot-js'
import { IMap, IScreen } from '../@types'
import { ScreenBase } from './ScreenBase'
import { Map } from '../Map/Map'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Globals'
import { ScreenName } from '../Models'

export default class PlayScreen extends ScreenBase implements IScreen {
  private readonly _map: IMap = new Map([[]], 200, 200)
  private _x: number = 0
  private _y: number = 0

  constructor() {
    super(ScreenName.PlayScreen)
    console.log('entering play screen')
  }

  render = (display: ROT.Display) => {

    if (!this._map.isInitialized()) {
      // Generate and render map
      this._map.generateMap()
    }

    // Set map to screen
    const screenWidth = SCREEN_WIDTH
    const screenHeight = SCREEN_HEIGHT

    // Get the max of 0 and current pos - half the width (to always at least show the whole screen)
    // Then get the minimum of that number and the
    const topLeftX = Math.min(Math.max(0, this._x - (screenWidth / 2)), this._map.getWidth() - screenWidth)
    const topLeftY = Math.min(Math.max(0, this._y - (screenHeight / 2)), this._map.getHeight() - screenHeight)

    for (let x = topLeftX; x < topLeftX + screenWidth; x++) {
      for (let y = topLeftY; y < topLeftY + screenHeight; y++) {
        const glyph = this._map.getTile(x, y).getGlyph()
        display.draw(
          x - topLeftX,
          y - topLeftY,
          glyph.getChar(),
          glyph.getForeground(),
          glyph.getBackground())
      }
    }

    // Render the character
    display.draw(
      this._x - topLeftX,
      this._y - topLeftY,
      // this._x,
      // this._y,
      '@',
      'white',
      'black')

  }

  moveScreen = (dX: number, dY: number) => {
    // if (this._map.getTile(this.moveX(dX), this.moveY(dY)).isDiggable()) {
      this._x = this.moveX(dX)
      this._y = this.moveY(dY)
    // }
  }

  generateLevel = () => {

  }

  private moveX = (dX: number) => Math.max(0, Math.min(SCREEN_WIDTH - 1, this._x + dX))

  private moveY = (dY: number) => Math.max(0, Math.min(SCREEN_HEIGHT - 1, this._y + dY))
}


