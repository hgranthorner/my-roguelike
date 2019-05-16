import * as ROT from 'rot-js'
import { ScreenBase } from './ScreenBase'
import { IScreen } from '../@types'

export default class WinScreen extends ScreenBase implements IScreen {
  constructor() {
    super('win')
  }

  render = (display: ROT.Display) => {
    for (let i = 0; i < 22; i++) {
      const r = Math.round(Math.random() * 255)
      const g = Math.round(Math.random() * 255)
      const b = Math.round(Math.random() * 255)
      const background = ROT.Color.toRGB([r, g, b])
      display.drawText(2, i + 1, `%b{${background}}You win!`)
    }
  }
}
