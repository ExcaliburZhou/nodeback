/**
 * Created by Excalibur on 17/1/12.
 * ===========
 * if you have any question, pls contact with me.
 * https://github.com/ExcaliburZhou
 */
var express = require('express');
var  router = express.Router();

var users = require('./users');

router.post('/login', (req, res)=>{
    var username = req.body.username;
    var password = req.body.password;
    if(username === ''){
        res.send({
            code: 1,
            message: '用户名不能为空!'
        })
    }
    if(password === ''){
        res.send({
            code: 1,
            message: '密码不能为空!'
        })
    }

    users.find({
        username: username,
        password: password
    }, function(e, user){
        if(!e){
            if(user.length > 0){
                res.send({
                    code: 200,
                    message: "登录成功"
                })
            }else {
                res.send({
                    code: 1,
                    message: "用户名不存在或密码错误!"
                })
            }

        }else {
            res.send({
                code: 1,
                message: e.message
            })
        }
    })

});


module.exports = router;