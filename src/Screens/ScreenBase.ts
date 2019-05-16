import * as ROT from 'rot-js'
import { IScreen } from '../@types'

export abstract class ScreenBase implements IScreen {
  protected readonly screenName: string
  protected constructor(_screenName: string) {
    this.screenName = _screenName
    this.enter()
  }

  enter = () => {
    console.log(`Entered ${this.screenName} screen.`)
  }

  exit = () => {
    console.log(`Exited ${this.screenName} screen`)
  }

  abstract render: (display: ROT.Display) => void

  switchScreen = (screen: IScreen) => {
    this.exit()
    return screen
  }
}
