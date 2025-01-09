const mongoose = require('mongoose');

const pantryStaffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A pantry staff must have a name'],
    },
    contactInfo: String,
    location: String,
    // Add more fields as needed
});

const PantryStaff = mongoose.model('PantryStaff', pantryStaffSchema);

module.exports = PantryStaff;