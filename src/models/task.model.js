const mongoose = require("mongoose")

const { Schema } = mongoose;

const schema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : String,
    priority : String,
    tags : [String],
    deadline : Date
})

const Task = mongoose.model('Tasks', schema)

module.exports = Task