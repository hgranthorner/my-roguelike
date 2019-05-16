import * as ROT from 'rot-js'
import { IGame, IScreen, IScreens } from './@types'
import { LoseScreen, PlayScreen, StartScreen, WinScreen } from './Screens'
import { InputType } from './Models'
import { HEIGHT, WIDTH } from './Globals'
import { InputHandler } from './InputHandler'

export class Game implements IGame {
  private _display: ROT.Display = new ROT.Display({ width: WIDTH, height: HEIGHT })
  private _inputHandler: InputHandler

  private _screens: IScreens

  private _currentScreen: IScreen

  constructor() {
    this._screens = {
      loseScreen: new LoseScreen,
      winScreen: new WinScreen,
      startScreen: new StartScreen,
      playScreen: new PlayScreen
    }
    this._currentScreen = this._screens.startScreen
    this._inputHandler = new InputHandler(this._screens.playScreen)
  }

  init = () => {
    this._display = new ROT.Display({ width: WIDTH, height: HEIGHT })
    const bindEventToHandler = (inputType: InputType) => {
      window.addEventListener(inputType, (evt: KeyboardEvent) => {
        if (this._currentScreen !== null) {
          const newScreen = this._inputHandler.handleInput(this._currentScreen.screenName, inputType, evt)
          if (newScreen)
            this.switchScreen(this._screens[newScreen])
        }
      })
    }
    bindEventToHandler(InputType.KeyDown)
    bindEventToHandler(InputType.KeyUp)
    bindEventToHandler(InputType.KeyPress)
  }

  getDisplay = () => this._display

  loadStartScreen = () => {
    this.switchScreen(this._screens.startScreen)
  }

  switchScreen = (screen: IScreen) => {
    this._currentScreen.exit()
    this.getDisplay().clear()
    this._currentScreen = this._currentScreen.switchScreen(screen)
    this._currentScreen.enter()
    this._currentScreen.render(this.getDisplay())
  }
}

