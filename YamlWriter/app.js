var tl = require('vso-task-lib');
var yamlwriter = require('yamlw');
var fs = require('fs');

(function () {
    'use strict';
    
    //var echo = new tl.ToolRunner(tl.which('echo', true));
    var file = tl.getInput('file', true);
    var set = tl.getInput('set', true);
    var dry = tl.getInput('dry', false) == 'true';
    var json = tl.getInput('json', false) == 'true';

    console.log(`File: ${file} (exists: ${fs.existsSync(file)})`);
    console.log(`Settings: ${set}`);
    console.log(`Dry run: ${dry}`);    

    var result = yamlwriter(file, dry, set, json);
    console.log(`Result:\n ${result}`);    
}());