// async handler to avoid try/catch repitition
const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next)
        }
        catch(error) {
            next(error)
        }
    }
}

module.exports = {asyncHandler};