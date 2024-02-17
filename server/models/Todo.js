const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    todoText: String,
    isImportant: {type: Boolean, default: false},
    isCompleted: {type: Boolean, default: false},
    user: {
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo