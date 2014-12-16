'use strict';

var NANO_PER_SECOND = 1e9;
var NANO_PER_MILLI  = 1e6;

module.exports = function() {
  var start = process.hrtime();

  function getNanoseconds() {
    var delta = process.hrtime(start);
    return delta[0] * NANO_PER_SECOND + delta[1];
  }

  function getMilliseconds() {
    return getNanoseconds() / NANO_PER_MILLI;
  }

  function getSeconds() {
    return getNanoseconds() / NANO_PER_SECOND;
  }

  return {
    getNanoseconds: getNanoseconds,
    getMilliseconds: getMilliseconds,
    getSeconds: getSeconds
  };
}
