
node 起的服务器,用于平时模拟数据及学习所用

```
    git clone git@github.com:ExcaliburZhou/nodeback.git
    npm install
    brew install mongodb
    更改mongodb.conf里面的mongodbpath路径
    npm run mongod
    npm start
    浏览器打开localhost:3100
```

若未安装mongodb, 且暂不需要用到mongodb,可将app中数据库设置注释,并将routes/index.js下和login相关接口注释