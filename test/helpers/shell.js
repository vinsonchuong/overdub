/* @flow */
import { promisify } from 'util'
import * as childProcess from 'child_process'

export default promisify(childProcess.exec)
