import { game } from '../../Game'
// import { engine } from '../../Map/Helpers/Engine'

export class Actor {
  act = () => {
    game.refresh()
    // engine.lock()
    // @ts-ignore
    let done: any
    const promise = {
      then: (cb: any) => {
        done = cb
      }
    }
    return promise
  }
}
