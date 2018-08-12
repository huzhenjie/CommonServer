'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

global.Cache = require('../lib/cache/Cache');
global.Util = require('../lib/common/Util');
global.Res = require('../lib/common/Res');
global.Schedule = require('node-schedule');
global.Co = require('co');
global.Config = require('./Config');

const dbPool = new Sequelize(Config.datasource.mysql.database, Config.datasource.mysql.user, Config.datasource.mysql.password, {
    host: Config.datasource.mysql.host,
    port: Config.datasource.mysql.port,
    dialect: 'mysql',
    dialectOptions: {
        // charset: "utf8mb4",
        // collate: "utf8mb4_unicode_ci",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        maxConnections: 20,
        minConnections: 5,
        idle: 10000
    },

    benchmark: true,
    operatorsAliases: false
});
dbPool.authenticate()
    .then(() => {
        console.log('[MySQL] 连接成功', 'SUCCESS')
    })
    .catch(err => {
        console.log('[MySQL] 连接失败, 原因', `${err} `)
    });
global.Sequelize = Sequelize;
global.Conn = dbPool;

app.use('/api/*', require('../lib/interceptor/Auth'));
app.use('/api', require('./router/ApiRouter'));
app.use('/', require('./router/UnAuthRouter'));

app.listen(Config.port, Config.host, function () {
    console.log(`Visit at http://${Config.host}:${Config.port}`);
});

require('../lib/schedule/Schedule').sync();