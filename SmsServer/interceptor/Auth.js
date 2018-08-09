// const TokenDao = require('../dao/TokenDao');

const errorCodePrefix = 1000;

module.exports = function (req, res, next) {
    // const {aid, accesstoken} = req.headers;
    // if (!aid && !accesstoken) {
    //     L.e(req.headers);
    //     return Res.error(res, errorCodePrefix + 1, '请登录')
    // }
    //
    // Co(function *() {
    //     const tokenInfo = yield TokenDao.getTokenInfo(aid, accesstoken);
    //     if (!tokenInfo) {
    //         L.e(req.headers);
    //         return Res.error(res, errorCodePrefix + 2, '请重新登录')
    //     }
    next()
    // })
};