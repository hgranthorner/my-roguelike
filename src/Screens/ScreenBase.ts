import * as ROT from 'rot-js'
import { IScreen } from '../@types'
import { ScreenName } from '../Models'

export abstract class ScreenBase implements IScreen {
  readonly screenName: ScreenName
  protected constructor(_screenName: ScreenName) {
    this.screenName = _screenName
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
