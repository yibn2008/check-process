'use strict'

function check (pid) {
  let result = {
    exists: true,
    killable: false
  }

  try {
    process.kill(parseInt(pid, 10), 0)
    result.killable = true
  } catch (err) {
    if (err.code === 'ESRCH') {
      result.exists = false
    }
  }

  return result
}

module.exports = check
