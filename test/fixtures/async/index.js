/* @flow */
import { promisify } from 'util'

const sleep = promisify(setTimeout)

async function two(): Promise<void> {
  await sleep(100)
  throw new Error('Hello World!')
}

async function one(): Promise<void> {
  await sleep(100)
  await two()
}

async function run(): Promise<void> {
  await sleep(100)
  await one()
}

run().catch(error => console.log(error))
