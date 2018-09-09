/* @flow */
import test from 'ava'
import { shell } from 'overdub/test/helpers'

test('extending node to support ES.Next', async t => {
  await shell('build-esm')
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
