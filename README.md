# check-process

check existence of process by pid

## Usage

```js
const check = require('check-process')
const cp = require('child_process')

// return { exists: true, killable: false }
check(1)

// return { exists: true, killable: true }
let child = cp.exec(process.execPath, [someScript])
check(child.pid)
```

## API

### `check(pid)`

- `pid`, *{Number}* process PID

Check existence of process by pid.

Return a object:

```
{
  exists: <Boolean>,      // is process exists
  killable: <Boolean>     // is process killable
}
```

## LICENSE

MIT