/* eslint-disable handle-callback-err */
/* @flow */
import { sep } from 'path'
import babelConfig from 'overdub/babel'

require('@babel/register')(babelConfig)

require('trace')
require('stack-chain').filter.attach((error, frames) => {
  return frames.filter(callSite => {
    const name = callSite && callSite.getFileName()
    return (
      name &&
      name.includes(sep) &&
      !name.startsWith('internal') &&
      !name.includes(`pirates${sep}lib${sep}index.js`)
    )
  })
})
