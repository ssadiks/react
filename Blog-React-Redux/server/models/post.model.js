var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PostSchema = new Schema({
    title: {
        type: String,
        trim: true,
        unique: false,
        required: 'Title is required'
    },
    text: {
      type: String,
      trim: true,
      lowercase: true,
      required: 'Form Name is required'
    },
    likes: {
        type: Number
    },
    comments: [{
      id: false,
      name: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Name Field is required'
      },
      message: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Message Field is required'
      },
      date_com: String,
      likes: {
        type: Number
      }
    }]
});

module.exports = mongoose.model('Post', PostSchema);