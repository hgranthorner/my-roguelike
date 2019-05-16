import * as ROT from 'rot-js'
import { ScreenName } from '../../Models'

export interface IScreen {
  screenName: ScreenName
  enter: () => void
  exit: () => void
  render: (display: ROT.Display) => void
  switchScreen: (screen: IScreen) => IScreen
}
