interface Hello {
  happy: boolean
  words: string
}

const hello: Hello = {
  happy: true,
  words: 'hello world'
}

console.log(`I am ${hello.happy}, so I will say "${hello.words}"`)
