var tl = require('vso-task-lib');
var yamlwriter = require('yamlw');

(function () {
    'use strict';
    var result = yamlwriter('testoutput/test.yaml', false, "jordan='jordan2'");
    // var echo = new tl.ToolRunner(tl.which('echo', true));
    // var file = tl.getInput('file', true);
    // var set = tl.getInput('set', true);
    // var dry = tl.getInput('dry', false);
    // var result = yamlwriter(file, dry, set);
    // echo.arg(`Output->${file}->\n${result}`);
}());