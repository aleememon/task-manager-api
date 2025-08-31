const express = require("express")
const taskRoutes = require("./src/routes/task.routes")
const { errorHandler } = require("./src/middleware/errorHandler")
const tasksLimiter = require("./src/middleware/rateLimiter");

const app = express()

// middleware
app.use(express.json())

const morgan = require("morgan")
const cors = require("cors");
const requestId = require("./src/middleware/requestId");
// routes
app.use(morgan("dev"))
app.use(cors())
app.use("/api/tasks", taskRoutes)
app.use("/api/tasks", tasksLimiter)
app.use(requestId)
app.use(errorHandler)

module.exports = app