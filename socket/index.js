
var loginNum = 0;
module.exports = function(io){
    "use strict";
    io.on('connection', function(socket){
        "use strict";
        io.emit('login',{num: ++loginNum})

        socket.on('disconnect', function(){
            io.emit('login',{num: --loginNum})
        })

        socket.on('socket', function(msg){
            console.log(msg);
            io.emit('chat', msg)
        })
    })
}