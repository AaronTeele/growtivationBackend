const db = require('./pgpromise');

HomeService.read = () => {
    return { "success": "WELCOME" };
};

module.exports = HomeService;