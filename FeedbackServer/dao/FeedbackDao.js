function * addFeedback(appId, uid, title, ch, vc, vn, pt, contract, content) {
    const createTs = new Date().getTime();
    const [insertId, affectedRows] =
        yield Conn.query(
            'insert ignore into feedback set app_id=?,uid=?,title=?,ch=?,vc=?,vn=?,pt=?,contract=?,create_ts=?,content=?',
            {
                replacements: [appId, uid, title, ch, vc, vn, pt, contract, createTs, content],
                type: Sequelize.QueryTypes.INSERT
            });
    return insertId;
}

module.exports = {
    addFeedback
};