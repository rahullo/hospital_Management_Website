const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A patient must have a name'],
    },
    diseases: [String],
    allergies: [String],
    roomNumber: String,
    bedNumber: String,
    floorNumber: String,
    age: Number,
    gender: String,
    contactInfo: String,
    emergencyContact: String,
    // Add more fields as needed
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;