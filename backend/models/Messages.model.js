const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: { type: String, required: true },
  messages: [
    {
      mid: { type: String, required: true },
      text: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const SenderMessages = mongoose.model('SenderMessages', messageSchema);

module.exports = SenderMessages;
