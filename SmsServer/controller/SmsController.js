const rp = require('request-promise');
const md5 = require('md5');

module.exports = {
    send: function (req, res) {
        const appInfo = req.appInfo;
        const tel = req.query.tel;
        if (!tel) {
            return Res.paramError(res)
        }

        const code = Util.rand();
        const body = {
            tel: {
                nationcode: '86',
                phone: tel
            },
            type: '0', //0:普通短信;1:营销短信
            tpl_id: Config.sms.tencent.templateId,
            params: [code, appInfo.app_name],
            sig: md5(`${Config.sms.tencent.appSecret}${tel}`),
            extend: '',
            ext: ''
        };

        Cache.addToMemory(`sms_code:${tel}`, code, 20 * 60 * 1000 + new Date().getTime()); // 20分钟过期
        console.log(`https://yun.tim.qq.com/v3/tlssmssvr/sendsms?sdkappid=${Config.sms.tencent.appId}&random=${Util.rand()}`);
        rp({
            method: 'POST',
            uri: `https://yun.tim.qq.com/v3/tlssmssvr/sendsms?sdkappid=${Config.sms.tencent.appId}&random=${Util.rand()}`,
            body: body,
            json: true
        }).then(parsedBody => {
            console.log(parsedBody);
            if (parsedBody.result != 0) {
                console.log(`发送短信失败:${parsedBody.errmsg}`);
                return Res.serverError(res, parsedBody.errmsg, parsedBody);
            }
            Res.success(res)
        }).catch(err => {
            console.log(err);
            return Res.serverError(res, err)
        });
    },
    
    verifySmsCode: function (req, res) {
        const {tel, code} = req.body;
        if (!tel || !code) {
            return Res.paramError(res)
        }

        const cacheCode = Cache.getMemory(`sms_code:${tel}`);
        if (!cacheCode) {
            return Res.notFoundError(res)
        }
        
        if (code != cacheCode) {
            return Res.error(res, 400, '验证码错误')
        }
        
        return Res.success(res)
    }
};