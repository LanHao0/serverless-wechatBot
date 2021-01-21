## Tencent Serverless  微信机器人
### 简介
本项目为腾讯serverless搭建微信机器人示例代码仓库

## 本地搭建
### 1.克隆项目
clone 本项目到本地, 并安装依赖
```
git clone https://github.com/LanHao0/serverless-wechatBot
npm install -g serverless
npm i
```

#### 2.微信部分（不需要公众号查询可跳过此步）
1. 在公众号后台 左侧菜单-开发-基本配置 中设置好
- 服务器地址(URL)
填写serverless的链接+/w
例如： 
```
https://您的 Serverless 应用链接/w
```
- 令牌(Token)

- 消息加解密密钥(EncodingAESKey)

2. 更改 sls.js 代码中27行开始的 config 中的参数
 
### 3.修改代码为适合你需求的！
### 4.部署
运行以下命令，扫码立即部署！
```
serverless deploy
```
