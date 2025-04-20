// index.test.js
const assert = require('assert');
const run = require('./index');       // if you export run from index.js

// A trivial smoke‐test:
assert.doesNotThrow(() => {
  run(); // or whatever function you exported
});
console.log('✅ index.js ran without throwing');
