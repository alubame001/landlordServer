/**
 * 服务器的配置信息
 */
module.exports = {
    // 服务器名字与ID
    id : 1,
    name : 'GS1',

    // 监听的端口号
    port : 8081,

    // telnet 的端口号
    telnetPort : 5001,

    // cluster 进程数量
    clusterNum : 4,

    // mysql 配置(前缀必须为 mysqlDb)
    mysqlDb : {
        host : '58ba6bbc4c9ae.gz.cdb.myqcloud.com',
        port: 15333,
        database : 'landlord',
        user : 'cdb_outerroot',
        password : 'justtest2017',
    },
}
/*
https://console.qcloud.com/cdb
初始化:设定密码

https://gz-dmc.qcloud.com/
建立landlord资料库
用/sql/player_score.sql 建立table

https://console.qcloud.com/cdb
外网地址:开启
然後收站内信，就会有上面参数需要的讯息
*/