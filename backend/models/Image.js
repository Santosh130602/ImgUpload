
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  viewCount: { type: Number, default: 0 } // Added view count field
});

module.exports = mongoose.model('Image', imageSchema);
