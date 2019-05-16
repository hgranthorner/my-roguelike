import { Game } from './Game'

const game = new Game

window.onload = () => {
  game.init()
  const display = game.getDisplay().getContainer()
  if (display) {
    document.body.appendChild(display)
    game.switchScreen(game.screens.startScreen)
  }
}
