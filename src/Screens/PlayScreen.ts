import * as ROT from 'rot-js'
import { IMap, IScreen } from '../@types'
import { ScreenBase } from './ScreenBase'
import { Map } from '../Map/Map'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Globals'
import { ScreenName } from '../Models'
import { MovingActor, PlayerTemplate } from '../Entity'

export default class PlayScreen extends ScreenBase implements IScreen {
  private readonly _map: IMap = new Map([[]], 100, 100)
  private _player: MovingActor = new MovingActor(PlayerTemplate)

  constructor() {
    super(ScreenName.PlayScreen)
    console.log('entering play screen')
  }

  render = (display: ROT.Display) => {

    // Generate and render map if needed
    if (!this._map.isInitialized()) {
      this._map.generateMap()
    }

    // Generate player if needed
    if (this._player.isInitialized === false) {
      const pos = this._map.getRandomFloorPosition()
      this._player.x = pos.x
      this._player.y = pos.y
      this._player.isInitialized = true
    }

    // Set map to screen
    const screenWidth = SCREEN_WIDTH
    const screenHeight = SCREEN_HEIGHT

    // Get the max of 0 and current pos - half the width (to always at least show the whole screen)
    // Then get the minimum of that number and the
    const topLeftX = Math.min(Math.max(0, this._player.x - (screenWidth / 2)), this._map.getWidth() - screenWidth)
    const topLeftY = Math.min(Math.max(0, this._player.y - (screenHeight / 2)), this._map.getHeight() - screenHeight)

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
      this._player.x - topLeftX,
      this._player.y - topLeftY,
      this._player.getChar(),
      this._player.getForeground(),
      this._player.getBackground())

  }

  moveScreen = (dX: number, dY: number) => {
    const newX = this._player.x + dX
    const newY = this._player.y + dY
    this._player.tryMove(newX, newY, this._map)
  }

  generateLevel = () => {

  }
}


