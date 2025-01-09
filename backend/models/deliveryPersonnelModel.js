const mongoose = require('mongoose');

const deliveryPersonnelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A delivery personnel must have a name'],
    },
    contactInfo: String,
    // Add more fields as needed
});

const DeliveryPersonnel = mongoose.model('DeliveryPersonnel', deliveryPersonnelSchema);

module.exports = DeliveryPersonnel;