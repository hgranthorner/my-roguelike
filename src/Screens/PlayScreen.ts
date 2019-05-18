import * as ROT from 'rot-js'
import { IMap, IScreen } from '../@types'
import { ScreenBase } from './ScreenBase'
import { Map } from '../Map/Map'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Globals'
import { ScreenName } from '../Models'

export default class PlayScreen extends ScreenBase implements IScreen {
  private readonly _map: IMap

  constructor() {
    super(ScreenName.PlayScreen)
    this._map = new Map([[]], 100, 100)
    console.log('entering play screen')
    console.log(this._map.player.x, this._map.player.y)
  }

  render = (display: ROT.Display) => {
    // Set map to screen
    const screenWidth = SCREEN_WIDTH
    const screenHeight = SCREEN_HEIGHT

    // Get the max of 0 and current pos - half the width (to always at least show the whole screen)
    // Then get the minimum of that number and the
    const topLeftX = Math.min(Math.max(0, this._map.player.x - (screenWidth / 2)), this._map.getWidth() - screenWidth)
    const topLeftY = Math.min(Math.max(0, this._map.player.y - (screenHeight / 2)), this._map.getHeight() - screenHeight)

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

    // Render the entities
    for (let entity of this._map.getEntities()) {
      if (entity.x >= topLeftX && entity.y >= topLeftY &&
        entity.x < topLeftX + screenWidth &&
        entity.y < topLeftY + screenHeight) {
        display.draw(
          entity.x - topLeftX,
          entity.y - topLeftY,
          entity.getChar(),
          entity.getForeground(),
          entity.getBackground()
        )
      }
    }

    const stats = `%c(white)%b(black)HP:${this._map.player.defenses.getHp()}|ATT:${this._map.player.attacker.attackPower}`
    display.drawText(1, screenHeight, stats)
  }

  moveScreen = (dX: number, dY: number) => {
    const newX = this._map.player.x + dX
    const newY = this._map.player.y + dY
    this._map.player.tryMove(newX, newY, this._map)
    this._map.getEngine().unlock()
  }

  getMap = () => this._map
}


