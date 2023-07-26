const mongoose = require('mongoose');


const testimonialSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'you must have a name'],

    },
    company: {
        type: String,
    },
    image: {
        type: String,
    },
    feedback: {
        type: String
    }
})

const Testimonial = new mongoose.model('Testimonial', testimonialSchema);
module.exports = Testimonial