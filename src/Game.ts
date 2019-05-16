import * as ROT from 'rot-js'
import { IGame, IScreen, IScreens } from './@types'
import { LoseScreen, PlayScreen, StartScreen, WinScreen } from './Screens'
import { InputType, Key } from './Models'


export class Game implements IGame {
  private display: ROT.Display = new ROT.Display({ width: 80, height: 20 })

  screens: IScreens = {
    loseScreen: new LoseScreen,
    winScreen: new WinScreen,
    startScreen: new StartScreen,
    playScreen: new PlayScreen
  }

  private currentScreen: IScreen = this.screens.startScreen

  init = () => {
    this.display = new ROT.Display({ width: 80, height: 20 })
    const bindEventToGame = (inputType: InputType) => {
      window.addEventListener(inputType, (evt: KeyboardEvent) => {
        if (this.currentScreen !== null) {
          this.handleInput(inputType, evt)
        }
      })
    }
    bindEventToGame(InputType.KeyDown)
    bindEventToGame(InputType.KeyUp)
    bindEventToGame(InputType.KeyPress)
  }

  getDisplay = () => this.display

  switchScreen = (screen: IScreen) => {
    this.currentScreen.exit()
    this.getDisplay().clear()
    this.currentScreen = this.currentScreen.switchScreen(screen)
    this.currentScreen.render(this.display)
  }

  handleInput = (inputType: InputType, evt: KeyboardEvent) => {
    if (inputType === InputType.KeyDown && evt.key === Key.Enter) {
      switch (this.currentScreen) {
        case (this.screens.startScreen):
          return this.switchScreen(this.screens.playScreen)
        case (this.screens.loseScreen):
          return this.switchScreen(this.screens.startScreen)
        case (this.screens.winScreen):
          return this.switchScreen(this.screens.startScreen)
        case (this.screens.playScreen):
          return this.switchScreen(this.screens.winScreen)
        default:
          return this.currentScreen
      }
  } else if (inputType === InputType.KeyDown && evt.key === Key.Esc) {
      switch (this.currentScreen) {
        case (this.screens.playScreen):
          return this.switchScreen(this.screens.loseScreen)
        default:
          return this.currentScreen
      }
    }
  }
}

