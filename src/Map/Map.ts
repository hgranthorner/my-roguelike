import { IMap } from '../@types'
import { nullTile, Tile } from '../Tile/Tile'

export class Map implements IMap {
  private readonly width: number
  private readonly height: number
  private readonly tiles: [Tile[]]

  constructor(_tiles: [Tile[]]) {
    this.tiles = _tiles
    this.width = this.tiles.length
    this.height = this.tiles[0].length
  }

  getWidth = () => this.width
  getHeight = () => this.height
  getTile = (x: number, y: number) => {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return nullTile()
    } else {
      return this.tiles[x][y] || nullTile()
    }
  }

  generateMap = () => {
    for (let x = 0; x < 80; x++) {
      if (x > 0)
        this.tiles.push([])
      for (let y = 0; y < 24; y++) {
        this.tiles[x].push(nullTile())
      }
    }
  }
}
