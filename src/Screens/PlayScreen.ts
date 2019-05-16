import * as ROT from 'rot-js'
import { IMap, IScreen } from '../@types'
import { ScreenBase } from './ScreenBase'
import { Map } from '../Map/Map'

export default class PlayScreen extends ScreenBase implements IScreen {
  private readonly map: IMap = new Map([[]])

  constructor() {
    super('play')
    this.map.generateMap()
  }

  render = (display: ROT.Display) => {
    display.drawText(3, 5, '%c{red}%b{white}This game is so much fun!')
    display.drawText(4, 6, 'Press [Enter] to win, or [Esc] to lose!')
  }
}


