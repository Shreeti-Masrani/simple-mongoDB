const mongoose = require('mongoose');
const express = require('express');
const Task = require('./model/db');                             //import from db.js

const app = express();

//connect to DB
const db = 'mongodb+srv://user:user123@cluster1.kk0qp.mongodb.net/Note?retryWrites=true&w=majority';
mongoose.connect(db, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then((result) => app.listen(8080))                         //req is listen at port 8080
    .catch((err) => console.log('Error Occuredd!'))

//to add task in DB
app.get('/add-task', (req, res) => {
    const task = new Task({
        description: 'Task1',
        completed: 'true'
    });
    task.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
});

//display the task which is not Completed i.e false 
app.get('/all-task', (req, res) => {
    Task.find({ completed: false }).limit(5)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

//update completed false to true
app.get('/update-task', (req, res) => {
    Task.updateMany({ completed: 'false' }, { completed: 'true' })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

//delete a task using id
app.get('/delete-task', (req, res) => {
    Task.deleteOne({ _id: "62397fa18b09759c0fe6847b" })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});