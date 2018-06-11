const test = require('tape')
const stdout = require('test-console').stdout

const logger = require('./logger')

const callLogger = (verbose, ...args) => {
  const inspect = stdout.inspect()
  logger.verbose(verbose)
  logger.apply(null, args)
  logger.verbose(false)
  inspect.restore()
  return inspect.output[0]
}

test('When logger is called but ENVIRONMENT variable is set', t => {
  const {ENVIRONMENT} = process.env
  process.env.ENVIRONMENT = 'any'
  const consoleOutput = callLogger(true, 'Hello world')
  process.env.ENVIRONMENT = ENVIRONMENT
  t.deepEqual(consoleOutput, undefined, 'it should not print out the message')

  t.end()
})
