const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/smarties-task-database");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


module.exports = {mongoose};
