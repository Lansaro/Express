const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, 'Setup is required'],
            minlength: [5, 'Setup must be > 5 characters long']
        },
        punchline: {
            type: String,
            required: [true, 'Punch line is required'],
            minlength: [5, 'Punch line must be > 5 characters long']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Joke', JokeSchema);