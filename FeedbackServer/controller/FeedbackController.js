const FeedbackDao = require('../dao/FeedbackDao');
const FeedbackImgDao = require('../dao/FeedbackImgDao');

const addFeedback = (req, res) => {
    const body = req.body;
    if (!body || !body.content || body.content == '') {
        return Res.paramError(res)
    }

    const appId = req.appInfo.app_id;
    const content = body.content;
    const uid = body.uid || '';
    const title = body.title || '';
    const ch = body.ch || '';
    const vc = body.vc || '';
    const vn = body.vn || '';
    const pt = body.pt || '';
    const contract = body.contract || '';
    const imgs = body.imgs || [];

    Co(function *() {
        const feedbackId = yield FeedbackDao.addFeedback(appId, uid, title, ch, vc, vn, pt, contract, content);
        if (feedbackId <= 0) {
            return Res.serverError(res)
        }
        for (let img of imgs) {
            yield FeedbackImgDao.addFeedbackImg(feedbackId, img)
        }
        Res.success(res);
    });
};

module.exports = {
    addFeedback
};