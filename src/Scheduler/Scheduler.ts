// export class Scheduler<T = any> {
//   private readonly _queue: EventQueue<T>
//   private readonly _repeat: T[]
//   private readonly _current: any
//
//   constructor() {
//     this._queue = new EventQueue<T>
//   }
//
//   add = (item: any, repeat: boolean) => {
//
//   }
// }
//
// export class EventQueue<T = any> {
//   private _time: number
//   private _eventTimes: number[]
//   private _events: T[]
//
//   constructor() {
//     this._time = 0
//     this._events = []
//     this._eventTimes = []
//   }
//
//   getTime = () => this._time
//
//   clear = () => {
//     this._events = []
//     this._eventTimes = []
//     return this
//   }
//
//   add = (event: T, time: number) => {
//     let index = this._events.length
//     for (let i = 0; i < this._eventTimes.length; i++) {
//       if (this._eventTimes[i] > time) {
//         index = i
//         break
//       }
//     }
//
//     this._events.splice(index, 0, event)
//     this._eventTimes.splice(index, 0, time)
//   }
//
//   remove = (event: T) => {
//     let index = this._events.indexOf(event)
//     if (index == -1) return false
//     this._events.splice(index, 1);
//     this._eventTimes.splice(index, 1);
//     return true
//   }
// }
