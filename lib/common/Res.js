const success = (res, data) => {
    return res.json({
        code: 200,
        msg: 'ok',
        data: data
    })
};

const error = (res, code, msg) => {
    return res.json({
        code: code,
        msg: msg || '未知错误'
    });
};

const serverError = (res, msg, data) => {
    return res.json({
        code: 500,
        msg: msg || '服务异常',
        data: data
    });
};

const notFoundError = (res, msg) => {
    return res.json({
        code: 404,
        msg: msg || '没有找到相关数据'
    })
};

const forbiddenError = (res, msg) => {
    return res.json({
        code: 403,
        msg: msg || '权限不足'
    })
};

const paramError = (res, msg) => {
    return res.json({
        code: 400,
        msg: msg || '参数异常'
    })
};

module.exports = {
    success, error, serverError, notFoundError, forbiddenError, paramError
};