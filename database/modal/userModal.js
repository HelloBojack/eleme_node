const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
  us: {
    type: String,
    required: true
  },
  ps: {
    type: String,
    required: true
  },
})

var User = mongoose.model('user',userSchema)

module.exports=User