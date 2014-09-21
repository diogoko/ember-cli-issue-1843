/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/font-awesome/css/font-awesome.css');

var o = { destDir: 'fonts' };
app.import('bower_components/font-awesome/fonts/FontAwesome.otf', o);
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', o);
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', o);
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', o);
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', o);

app.import('bower_components/font-awesome/fonts/PiratePower.ttf', o);

app.import('bower_components/ember-qunit-notifications/failed.png', o);
app.import('bower_components/font-awesome/fonts/fake-failed.png', o);

module.exports = app.toTree();
