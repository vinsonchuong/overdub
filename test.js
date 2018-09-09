/* @flow */
import test from 'ava'
import greeting from 'overdub'

test('exporting "Hello World!"', t => {
  t.is(greeting, 'Hello World!')
})
