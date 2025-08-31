const { GetTaskById, CreateTask, TaskDeleteById, UpdateTaskById, GetTasks } = require("../services/task.service")
const { asyncHandler } = require("../utils/asyncHandler")

exports.createTask = asyncHandler(async(req, res, next) => {
        const newTask = await CreateTask(req.body)
        res.status(201).json(newTask)
})

exports.getTasks = asyncHandler(async(req, res, next) => {
        const allTasks = await GetTasks()
        res.status(200).json(allTasks)
})

exports.getTaskById = asyncHandler(async (req, res, next) => {
        const { id } = req.params;
        const findByIdTask = await GetTaskById(id)
        if (!findByIdTask) return res.status(404).json({error : "Task Not Found"})
        res.json(findByIdTask)
})

exports.TaskDeleteById = asyncHandler(async (req, res, next) => {
        const { id } = req.params;
        const task = await TaskDeleteById(id)
        if (!task) return res.status(404).json({error : "Task Not Found"})
        res.json(task)              
})

exports.TaskUpdateById = asyncHandler(async(req, res, next) => {
        const { id } = req.params;
        const task = await UpdateTaskById(id, req.body);
        if(!task) return res.status(404).json({error : "Task Not Found"})
        res.json(task)
})