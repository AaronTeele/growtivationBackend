const db = require('./pgpromise');
const HomeService = {};

HomeService.read = () => {
    return { "success": "WELCOME" };
};

module.exports={HomeService}