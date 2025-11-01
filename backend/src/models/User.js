const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  zoomAccessToken: String,
  zoomRefreshToken: String,
  zoomTokenExpires: Date,
  googleAccessToken: String,
  googleRefreshToken: String,
  googleTokenExpires: Date,
  meetings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meeting'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);