/* @flow */
import { promisify } from 'util'

const sleep = promisify(setTimeout)

async function foo(): Promise<void> {
  await sleep(100)
  throw new Error('Hello World!')
}

async function run(): Promise<void> {
  await foo()
}

run().catch(error => console.log(error))
