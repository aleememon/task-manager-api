const express = require("express")
const router = express.Router()
const taskController = require("../controllers/task.controller")
const { taskValidationRules } = require("../middleware/taskValidator")
const { validate } = require("../middleware/validateRequest")


router.post("/create",taskValidationRules,validate, taskController.createTask)
router.get("/", taskController.getTasks)
router.get("/:id", taskController.getTaskById)
router.delete("/:id", taskController.TaskDeleteById)
router.put("/:id", taskValidationRules, validate ,taskController.TaskUpdateById)
module.exports = router;