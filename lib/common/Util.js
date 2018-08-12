module.exports = {
    rand: function (count) {
        count = count || 6;
        let code = "";
        for (let i = 0; i < count; i++) {
            code += Math.floor(Math.random() * 10);
        }
        return code;
    }
};