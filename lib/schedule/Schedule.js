const SyncAppInfoSchedule = require('./SyncAppInfoSchedule');
const AutoClearMemorySchedule = require('./AutoClearMemorySchedule');

// register
module.exports = {
    sync: function () {
        SyncAppInfoSchedule.syncAppInfo();
        AutoClearMemorySchedule.clearExpiredMemory();
    }
};