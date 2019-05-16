import { LoseScreen, PlayScreen, StartScreen, WinScreen } from '../../Screens'
import { ScreenBase } from '../../Screens/ScreenBase'

export interface IScreens {
  [key:string]: ScreenBase
  loseScreen: LoseScreen
  playScreen: PlayScreen
  winScreen: WinScreen
  startScreen: StartScreen
}
