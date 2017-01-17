/**
 * Created by Excalibur on 17/1/12.
 * ===========
 * if you have any question, pls contact with me.
 * https://github.com/ExcaliburZhou
 */
var express = require('express');
var  router = express.Router();

var users = require('./users');

router.get('/login', (req, res)=>{
    var username = req.query.username;
    var password = req.query.password;
    var maxAge     = +req.query.maxAge;
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
                req.session.name = username;
                if(maxAge) req.session.cookie.maxAge = maxAge;
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


router.get('/isLogin', (req, res)=> {

    const name = req.session.name;
    if(name){
        res.send({
            code: 200,
            msg: "已登录",
            data: {
                username: name
            }
        })
    }else {
        res.send({
            code: 1,
            msg: "未登录",
            data: {}
        })
    }
})


module.exports = router;