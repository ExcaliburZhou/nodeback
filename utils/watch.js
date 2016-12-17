var fs      = require("fs");
var path    = require("path");

var src = "testtemplate", filename = "template.html";
var importExample = function(src, filename){
    "use strict";
    fs.readFile(path.join(src, filename), {
        encoding: 'utf8'
    }, function(err, data){


        if(err){
            return console.log(err)
        }

        var dataReplace = data.replace(/<link rel="import" href="(.*)" inject>/gi, function($0, $1){
            var temp = fs.readFileSync(path.join(src, $1), {
                encoding: 'utf8'
            });
            return $1.indexOf('.css') > -1 ? `<style>${temp}</style>` : temp;
        });

        fs.writeFile('hehe.html',dataReplace, {
            encoding: 'utf8'
        }, function(err){
            !err && console.log('heheok');
        })
    })
}

importExample(src, filename);

fs.watch(path.join(src, filename), function(event, fn){
    console.log(event);
    "use strict";
    if(event === 'change'){
        console.log(path.join(src, fn) + '变了,生成ing');
        importExample(src, fn);
    }
})