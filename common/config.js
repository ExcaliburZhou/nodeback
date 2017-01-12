/**
 * Created by Excalibur on 16/12/17.
 */
var os = require('os');
var IPv4;
var envs = os.networkInterfaces().en0;
for(var i = 0; i < envs.length; i++){
    var env = envs[i];
    if(env.family == 'IPv4'){
        IPv4 = env.address;
        break;
    }
}

module.exports = {
    ip: IPv4,
    port: 3100
}