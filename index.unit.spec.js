const test = require('tape')

const main = require('./index')

test('When requiring FBUtils', t => {
  const methodNames = Object.keys(main)

  t.ok(methodNames.includes('logger'), 'it should export logger method')
  t.ok(methodNames.includes('clone'), 'it should export clone method')
  t.ok(methodNames.includes('deepClone'), 'it should export deepClone method')

  t.end()
})
