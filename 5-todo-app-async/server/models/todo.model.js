var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TodoSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: false,
        required: 'Title is required'
    },
    completed: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);