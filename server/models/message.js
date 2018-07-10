var mongoose = require('mongoose');

var Message = mongoose.model('Message', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  encryption: {
    type: String,
    default: false
  },
  decryption: {
    type: String,
    default: null
  }
});

module.exports = {Message};
