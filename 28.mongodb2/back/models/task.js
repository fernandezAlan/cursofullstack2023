const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    text: String,
    done: Boolean,
    userId: {type: mongoose.Types.ObjectId, ref: "user"}
})

const Task = mongoose.model('task',taskSchema)

module.exports = Task