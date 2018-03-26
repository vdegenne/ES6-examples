// commonJS
// var mymod = require('./module.mjs')
// console.log(mymod.jon) // 'snow'
// console.log(mymod.foo) // 'bar'

// ES6

// import the default exported binding (with a chosen name)
import mymod from './module'
// import a named export
import {jon, bar} from './module'

console.log(jon) // 'snow'
console.log(mymod.foo) // 'bar'
console.log(bar) // 'b'