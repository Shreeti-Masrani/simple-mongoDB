const mongoose = require('mongoose');               //used Mongoose
const Schema = mongoose.Schema;                     //for creating collection

const taskSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;                              //export is use to export from db.js to diff file 