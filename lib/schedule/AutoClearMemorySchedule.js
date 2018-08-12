module.exports = {
    clearExpiredMemory: function () {
        Schedule.scheduleJob('*/1 * * * *', function () {
            console.log('[Schedule] clearExpiredMemory');
            Cache.clearExpiredMemory()
        })
    }
};