const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// Routes

app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.get(`/`, async (req, res) => {
    res.json({msg: "myWechatBot"});
})

app.get(`/w`, async (req, res) => {
    res.send(req.query.echostr);
})

//微信对接
const wechat = require('wechat');
const config = {
    token: 'token',
    appid: 'appid',
    encodingAESKey: 'encodingAESKey',
    checkSignature: false
};


app.use('/w', wechat(config, async function (req, res, next) {
    // 微信输入信息都在req.weixin上

    const message = req.weixin;
    if (message.Content) {
        //处理消息
        let message_content = message.Content;

    } else {
        //显示帮助
        res.reply({
            type: 'text',
            content: 'text'
        });

    }


}));


app.get('/404', (req, res) => {
    res.status(404).send('Not found')
})

app.get('/500', (req, res) => {
    res.status(500).send('Server Error')
})

// Error handler
app.use(function (err, req, res, next) {
    console.error(err)
    res.status(500).send('Internal Serverless Error')
})

app.listen(8080)


module.exports = app
