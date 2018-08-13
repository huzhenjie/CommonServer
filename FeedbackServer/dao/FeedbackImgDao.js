function * addFeedbackImg(feedbackId, url) {
    const [insertId, affectedRows] =
        yield Conn.query(
            'insert ignore into feedback_img set feedback_id=?,url=?',
            {replacements: [feedbackId, url], type: Sequelize.QueryTypes.INSERT});
    return insertId;
}

module.exports = {
    addFeedbackImg
};