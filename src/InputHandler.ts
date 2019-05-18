import { InputType, Key, ScreenName } from './Models'
import { PlayScreen } from './Screens'
import { Maybe } from './@types'

export class InputHandler {
  private readonly _screen: PlayScreen

  constructor(playScreen: PlayScreen) {
    this._screen = playScreen
  }

  handleInput = (currentScreenName: string, inputType: InputType, evt: KeyboardEvent): Maybe<string> => {

    // Key down logic
    if (inputType === InputType.KeyDown) {

      // Enter logic
      if (evt.key === Key.Enter) {
        switch (currentScreenName) {
          case (ScreenName.StartScreen):
            return ScreenName.PlayScreen
          case (ScreenName.LoseScreen):
            return ScreenName.StartScreen
          case (ScreenName.WinScreen):
            return ScreenName.StartScreen
          case (ScreenName.PlayScreen):
            return ScreenName.WinScreen
          default:
            return null
        }
      }

      // Escape logic
      else if (evt.key === Key.Esc) {
        switch (currentScreenName) {
          case (ScreenName.PlayScreen):
            return ScreenName.LoseScreen
          default:
            return null
        }
      }

      // Arrow Key logic
      else if (evt.key === Key.Up || evt.key === Key.Right || evt.key === Key.Down || evt.key === Key.Left) {
        switch (evt.key) {
          case (Key.Up):
            this._screen.moveScreen(0, -1)
            return null
          case (Key.Right):
            this._screen.moveScreen(1, 0)
            return null
          case (Key.Down):
            this._screen.moveScreen(0, 1)
            return null
          case (Key.Left):
            this._screen.moveScreen(-1, 0)
            return null
          default:
            return null
        }
      }

      // "d" logic
      else if (evt.key === Key.d) {
        this._screen.getMap().player.dig()
        return null
      }
      // Default case
      else
      {
        return null
      }
    } else {
      return null
    }
  }
}
