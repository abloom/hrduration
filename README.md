hrduration
===========

Simple wrapper around process.hrtime to get duration.

````javascript
var HRDuration = require('hrduration');

...

var timer = new HRDuration();
doSomething();
console.log(timer.getSeconds());
````

Functions:

* `getSeconds` - returns the duration in seconds since initialization.
* `getMilliseconds` - returns the duration in milliseconds since initialization.
* `getNanoseconds` - returns the duration in nanoseconds since initialization.
