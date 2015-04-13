/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = process.env.EMBER_ENV;

var app = new EmberApp({
  storeConfigInMeta: false,
  wrapInEval: false,
  autoReload: true
  //
  //'ember-cli-bootstrap': {
  ////  'importBootstrapJS': true,
  ////  'importBootstrapTheme': true,
  //  'importBootstrapFont': true
  //}

});

if (env === 'development') {

  //app.options.inlineContent = {
  //  'appJS':{
  //  	file:'app/app.js',
  //  	enabled: true
  //  },
  //
  //  'appCSS':{
  //  	file:'app/styles/app.css',
  //  	enabled:true
  //  }
  //};
}

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
app.import('bower_components/moment/moment.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/ember-data-hal-adapter/hal_adapter.js');
app.import('bower_components/ember-data-hal-adapter/hal_serializer.js');
module.exports = app.toTree();
