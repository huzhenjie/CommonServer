module.exports = {
    test: function (req, res) {
        res.send({
            headers: req.headers,
            body: res.body
        })
    }
};