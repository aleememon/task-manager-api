const rateLimit = require("express-rate-limit");

const tasksLimiter = rateLimit({
    windowMs : 15 * 60 * 1000,
    max : 50,
    message : {
        status : "error",
        message : "Too many request, please try again later"
    },
});

module.exports = tasksLimiter;