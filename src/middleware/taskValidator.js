const { body } = require("express-validator");

exports.taskValidationRules = [
    body("title")
    .notEmpty().withMessage("Title is required")
    .isString().withMessage("Title must be a string")
    .isLength({min : 10}).withMessage("Title must be at least 10 characters long"),

    body("description")
    .optional()
    .isString().withMessage("Description must be a string"),

    body("priority")
    .optional()
    .isString().withMessage("Priority must be one of this low, medium or high"),

     body("tags")
    .optional()
    .isArray().withMessage("Tags must be an array")
    .custom((arr) => arr.every(tag => typeof tag === "string"))
    .withMessage("Each tag must be a string"),

  body("deadline")
    .optional()
    .isISO8601().withMessage("Deadline must be a valid date")
]