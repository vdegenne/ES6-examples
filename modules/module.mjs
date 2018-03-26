// commonJS
// module.exports = { foo: 'bar' }
// module.exports.jon = 'snow'

// ES6

/* default exported binding */
var api = {
    foo: 'bar'
}
export default api

/* named export */
export var jon = 'snow'

/* multiple named exports */
var foo = 'f'
var bar = 'b'
export {foo, bar}