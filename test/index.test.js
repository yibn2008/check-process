'use strict'

const assert = require('assert')
const cp = require('child_process')
const path = require('path')
const check = require('..')

describe('test check process', function () {
  it('should check existence of process', function () {
    let script = path.join(__dirname, 'foobar.js')
    let child = cp.spawn(process.execPath, [script])

    assert(check(child.pid).exists, true)

    child.kill()

    assert(check(child.pid).exists, false)
  })
})
