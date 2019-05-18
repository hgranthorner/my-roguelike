import { game } from '../../Game'
// import { engine } from '../../Map/Helpers/Engine'

export class Actor {
  act = () => {
    game.refresh()
    // @ts-ignore
    let done: any
    return {
      then: (cb: any) => {
        done = cb
      }
    }
  }
}
