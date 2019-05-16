import * as ROT from 'rot-js'

export interface IScreen {
  enter: () => void
  exit: () => void
  render: (display: ROT.Display) => void
  switchScreen: (screen: IScreen) => IScreen
}
