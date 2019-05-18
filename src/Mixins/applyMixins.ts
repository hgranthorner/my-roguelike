export type Constructor<T = {}> = new (...args: any[]) => T
// type AnyFunction<A = any> = (...input: any[]) => A
// type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>
//
// function TimeStamped<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     timestamp = Date.now()
//   }
// }
//
// function Tagged<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     tag: string | null
//
//     constructor(...args: any[]) {
//       super(...args)
//       this.tag = null
//     }
//   }
// }
//
// class User {
//   name: string
//
//   constructor(name: string) {
//     this.name = name
//   }
// }
//
// function Activatable<TBase extends Constructor>(Base: TBase) {
//   return class extends Base {
//     isActivated = false
//
//     activate = () => {
//       this.isActivated = true
//     }
//
//     deactivate = () => {
//       this.isActivated = false
//     }
//   }
// }

// type ApplyMixins = (baseClass: any, mixins: Array<(<TBase extends Constructor, U>(Base: TBase) => any)>) => (U extends (typeof baseClass))

export function applyMixins(baseClass: any, mixins: any[]) {
  let newClass = baseClass
  mixins.forEach(mixin => {
    newClass = mixin(newClass)
  })

  return newClass
}
