var pickFiles = require('broccoli-static-compiler')

module.exports = pickFiles('fonts', {
  srcDir: '/',
  destDir: 'fonts'
});
