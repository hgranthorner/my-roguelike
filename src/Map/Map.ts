import * as ROT from 'rot-js'
import { IMap } from '../@types'
import { floorTile, nullTile, Tile, wallTile } from '../Tile/Tile'

export class Map implements IMap {
  private readonly width: number = 80
  private readonly height: number = 24
  private readonly tiles: [Tile[]]

  constructor(_tiles: [Tile[]]) {
    this.tiles = _tiles
    this.generateMap()
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
    // generate empty arrays and null tiles
    for (let x = 0; x < 80; x++) {

      // ignore first row, as tiles are initialized with an array already
      if (x > 0)
        this.tiles.push([])
      for (let y = 0; y < 24; y++) {
        this.tiles[x].push(nullTile())
      }
    }

    const generator = new ROT.Map.Cellular(80, 24)
    generator.randomize(.5)
    generator.create((x, y, v) => {
      if (v === 1) {
        this.tiles[x][y] = floorTile()
      } else {
        this.tiles[x][y] = wallTile()
      }
    })
    console.log(this.tiles)
  }
}
