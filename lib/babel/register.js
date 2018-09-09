/* @flow */
import { config } from './'

export default function() {
  require('@babel/register')(config)
}
