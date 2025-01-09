const mongoose = require('mongoose');

const dietChartSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.ObjectId,
        ref: 'Patient',
        required: [true, 'A diet chart must belong to a patient'],
    },
    morningMeal: {
        type: String,
        required: [true, 'A diet chart must have a morning meal'],
    },
    eveningMeal: {
        type: String,
        required: [true, 'A diet chart must have an evening meal'],
    },
    nightMeal: {
        type: String,
        required: [true, 'A diet chart must have a night meal'],
    },
    ingredients: [String],
    instructions: String,
    // Add more fields as needed
});

const DietChart = mongoose.model('DietChart', dietChartSchema);

module.exports = DietChart;