var request = require('request');
var fs = require('fs');
var api = function(req, resp, next){
    "use strict";
    request('http://ac-OnsG2j7w.clouddn.com/550c6233efb6b6dd.json', function(err, res, body){
        console.log(res.statusCode);
        if(err || res.statusCode !== 200){
            next();
        }else {
            resp.send(body);
        }

    }).pipe(fs.createWriteStream('abc.json'))
}


module.exports = api;