const sync = () => {
    console.log('[Schedule] syncAppInfo:' + new Date());

    Co(function *() {
        const authList = yield Conn.query('select * from app_auth', {type: Sequelize.QueryTypes.SELECT});
        const authMap = {};
        authList.map(item => {
            let currAuthList = authMap[item.app_id];
            if (!currAuthList) {
                currAuthList = new Set()
            }
            currAuthList.add(item.app_permission);
            authMap[item.app_id] = currAuthList
        });

        const appInfoList = yield Conn.query(
            'select * from app where delete_ts=0', {type: Sequelize.QueryTypes.SELECT});
        const cacheAppInfoList = {};
        appInfoList.map(item => {
            let authSet = authMap[item.app_id];
            if (!authSet) {
                authSet = new Set()
            }
            const {app_id, app_key, app_secret, app_name, description} = item;
            cacheAppInfoList[item.app_id] = {
                app_id,
                app_key,
                app_secret,
                app_name,
                description,
                autn: authSet
            }
        });
        Cache.replaceAppInfoList(cacheAppInfoList);
    })
};

module.exports = {
    syncAppInfo: function () {
        sync();
        Schedule.scheduleJob('*/1 * * * *', function () {
            sync();
        })
    }
};