const errorCodePrefix = 1000;

module.exports = function (req, res, next) {
    const {appid, appkey} = req.headers;
    if (!appid || !appkey) {
        return Res.error(res, errorCodePrefix + 403, 'Forbidden')
    }

    const appInfo = Cache.getAppInfo(appid);
    if (!appInfo) {
        return Res.error(res, errorCodePrefix + 404, 'App not found')
    }

    if (appInfo.app_key !== appkey) {
        return Res.error(res, errorCodePrefix + 400, 'App key error')
    }
    
    req.appInfo = appInfo;

    next()
};