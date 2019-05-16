import * as ROT from 'rot-js'
import { ScreenBase } from './ScreenBase'
import { IScreen } from '../@types'
import { ScreenName } from '../Models'

export default class StartScreen extends ScreenBase implements IScreen {
  constructor() {
    super(ScreenName.StartScreen)
  }

  render = (display: ROT.Display) => {
    display.drawText(1, 1, `%c{yellow}Typescript Roguelike`)
    display.drawText(1, 2, 'Press [Enter] to start!')
  }
}
