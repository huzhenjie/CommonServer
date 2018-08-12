const SyncAppInfoSchedule = require('./SyncAppInfoSchedule');

// register
module.exports = {
    sync: function () {
        SyncAppInfoSchedule.syncAppInfo()
    }
};