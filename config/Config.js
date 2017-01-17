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
        host : '587b43233ccae.gz.cdb.myqcloud.com',
        port: 7808,
        database : 'landlord',
        user : 'cdb_outerroot',
        password : 'justtest2017',
    },
}
