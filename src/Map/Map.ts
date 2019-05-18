import * as ROT from 'rot-js'
import { ICoordinates, IMap } from '../@types'
import { floorTile, nullTile, Tile, wallTile } from '../Tile/Tile'

export class Map implements IMap {
  private readonly _width: number
  private readonly _height: number
  private readonly _tiles: [Tile[]]

  constructor(tiles: [Tile[]], width: number, height: number) {
    this._tiles = tiles
    this._width = width
    this._height = height
  }

  getWidth = () => this._width
  getHeight = () => this._height

  getTile = (x: number, y: number) => {
    if (x < 0 || x >= this._width || y < 0 || y >= this._height) {
      return nullTile()
    } else {
      return this._tiles[x][y] || nullTile()
    }
  }

  isInitialized = () => {
    return this._tiles[0].length > 0
  }

  generateMap = () => {
    // generate empty arrays and null tiles
    for (let x = 0; x < this._width; x++) {

      // ignore first row, as tiles are initialized with an array already
      if (x > 0)
        this._tiles.push([])
      for (let y = 0; y < this._height; y++) {
        this._tiles[x].push(nullTile())
      }
    }

    const generator = new ROT.Map.Cellular(this._width, this._height)
    generator.randomize(.5)
    generator.create((x, y, v) => {
      if (v === 1) {
        this._tiles[x][y] = floorTile()
      } else {
        this._tiles[x][y] = wallTile()
      }
    })
  }

  getRandomFloorPosition = () => {
    let x, y: number
    do {
      x = Math.floor(Math.random() * this._width)
      y = Math.floor(Math.random() * this._height)
      console.log(`x: ${x} y: ${y}`)
    } while (!this.getTile(x, y).isFloor)

    const coords: ICoordinates = { x, y }
    return coords
  }

  dig = (x: number, y: number) => {
    if (this.getTile(x, y).isDiggable())
      this._tiles[x][y] = floorTile()
  }
}
