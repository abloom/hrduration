/*
The MIT License (MIT)

Copyright (c) 2014 Andrew Bloom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

'use strict';

var NANO_PER_SECOND = 1e9;
var NANO_PER_MILLI  = 1e6;

module.exports = function HRDuration() {
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
