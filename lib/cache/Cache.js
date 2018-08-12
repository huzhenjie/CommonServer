let APP_INFO_LIST = {};
let MEMORY = {};

module.exports = {

    getAppInfo: function (appId) {
        return APP_INFO_LIST[appId];
    },

    replaceAppInfoList: function (list) {
        APP_INFO_LIST = list;
    },

    addToMemory: function (key, data, expiredTs) {
        if (!key) {
            console.log('key not found');
            return;
        }

        if (!expiredTs) {
            expiredTs = new Date().getTime() + 3600000;
        }

        MEMORY[key] = {
            key,
            data,
            expiredTs
        };
        console.log(MEMORY)
    },

    getMemory: function (key) {
        if (!key) {
            console.log('key not found');
            return null
        }

        const item = MEMORY[key];
        if (!item) {
            console.log('item not found');
            return null
        }

        const now = new Date().getTime();
        if (item.expiredTs < now) {
            console.log(`item expired ${key}`);
            delete MEMORY[key];
            return null;
        }

        return item.data;
    }
};