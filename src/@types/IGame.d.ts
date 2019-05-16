import * as ROT from 'rot-js'
import { IScreens } from './Screen/IScreens'

type getDisplay = () => ROT.Display

export interface IGame {
  screens: IScreens
  init: () => void
  getDisplay: getDisplay
}
