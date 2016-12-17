var fs = require('fs');
var path = require("path");


var src = '1';

fs.readdir(src, function(err, files){
    "use strict";
    files.forEach(function(filename, index){
        console.log(filename);
        var oldname = path.join(src, filename);
        var newname = path.join(src, filename.split('@')[0]);

        fs.rename(oldname, newname, function(err){
            !err && console.log(filename + 'ok');
        })
    })
})