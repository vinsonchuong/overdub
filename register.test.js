/* @flow */
import test from 'ava'
import { shell } from 'overdub/test/helpers'
import { promises as fs } from 'fs'
import tempy from 'tempy'

test.before(async t => {
  await shell('build-esm')
})

test('extending node to support ES.Next', async t => {
  const { stdout } = await shell(
    'node -r ./dist/register ./test/fixtures/project'
  )

  t.log(stdout)

  const lines = stdout
    .trim()
    .split('\n')
    .map(line => line.trim())

  t.true(lines[0].includes('Error: Hello World!'))
  t.true(lines.slice(1).every(line => line.includes('test/fixtures/project')))
})

test('compiling files outside the current directory', async t => {
  const modulePath = tempy.file({ extension: 'js' })
  await fs.writeFile(
    modulePath,
    `
    function add(x: number, y: number): number {
      return x + y
    }
    console.log(add(21, 21))
    `
  )

  const { stdout } = await shell(`node -r ./dist/register ${modulePath}`)
  t.true(stdout.includes('42'))

  await fs.unlink(modulePath)
})
