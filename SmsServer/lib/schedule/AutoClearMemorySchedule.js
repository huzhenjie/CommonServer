const Schedule = require('node-schedule');

module.exports = {
    clearExpiredMemory: function () {
        Schedule.scheduleJob('*/1 * * * *', function () {
            console.log('[Schedule] clearExpiredMemory');
            Cache.clearExpiredMemory()
        })
    }
};