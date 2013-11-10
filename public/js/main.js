requirejs.config({
  baseUrl: './js',
  paths: {
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
    requirejs: 'vendor/requirejs/require',
    jquery: 'vendor/jquery/jquery'
  },
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    }
  }
});

require(["jquery", "bootstrap"], function ($) {
});