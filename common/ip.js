/**
 * Created by Excalibur on 16/12/17.
 */
var os = require('os');
var IPv4;

for(var i=0; i < os.networkInterfaces().en0.length; i++){
    var env = os.networkInterfaces().en0[i];
    if(env.family == 'IPv4'){
        IPv4 = env.address;
        break;
    }
}

module.exports = {
    ip: IPv4,
    port: 3100
}