const Task = require("../models/task.model");

exports.GetTaskById = async (id) => {
    return await Task.findById(id);
}

exports.CreateTask = async (body) => {
    return await Task.create(body);
}

exports.GetTasks = async () => {
    return await Task.find()
}

exports.TaskDeleteById = async (id) => {
    return await Task.findByIdAndDelete(id);
}

exports.UpdateTaskById = async (id, body) => {
    return await Task.findByIdAndUpdate(id, body, {new : true});
}