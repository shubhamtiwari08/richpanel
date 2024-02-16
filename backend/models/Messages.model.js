const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    id: { type: String, required: true },
  },
  recipient: {
    id: { type: String, required: true },
  },
  timestamp: { type: Date, default: Date.now },
  message: {
    mid: { type: String, required: true },
    text: { type: String, required: true },
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
