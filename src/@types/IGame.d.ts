import * as ROT from 'rot-js'

type getDisplay = () => ROT.Display

export interface IGame {
  init: () => void
  getDisplay: getDisplay
  loadStartScreen: () => void
}
