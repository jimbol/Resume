var fs = require('fs');
var browserify = require('browserify');

var b = browserify({
  entries: ['lib/index.js'],
  cache: {},
  packageCache: {}
});

bundle();

function bundle() {
  b.bundle().pipe(fs.createWriteStream('assets/index.bundled.js'));
}
