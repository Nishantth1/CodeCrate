// Problem.js
import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  intuition: String,
  link: String,
});

const Problem = mongoose.model('Problem', problemSchema);

export default Problem;
