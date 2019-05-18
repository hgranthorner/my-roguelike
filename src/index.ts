import { game } from './Game'


window.onload = () => {
  game.init()
  const display = game.getDisplay().getContainer()
  if (display) {
    document.body.appendChild(display)
    game.loadStartScreen()
  }
}
