import * as ROT from 'rot-js'
import { ScreenBase } from './ScreenBase'
import { IScreen } from '../@types'

export default class LoseScreen extends ScreenBase implements IScreen {
  constructor() {
    super('lose')
  }

  render = (display: ROT.Display) => {
    for (var i = 0; i < 22; i++) {
      display.drawText(2, i + 1, '%b{red}You lose!')
    }
  }
}
