const { v4 : uuidv4 } = require("uuid");

const requestId = (req, res, next) => {
    const id = uuidv4();
    req.requestId = id;

    res.setHeader("X-Request", id);

    console.log(`[${id}] ${req.method} ${req.orginalUrl}`);
    next()
}

module.exports = requestId;
