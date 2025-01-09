const DietChart = require('../models/dietChartModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllDietCharts = catchAsync(async (req, res, next) => {
    const dietCharts = await DietChart.find();
    res.status(200).json({
        status: 'success',
        results: dietCharts.length,
        data: {
            dietCharts,
        },
    });
});

exports.getDietChart = catchAsync(async (req, res, next) => {
    const dietChart = await DietChart.findById(req.params.id);
    if (!dietChart) {
        return next(new AppError('No diet chart found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            dietChart,
        },
    });
});

exports.createDietChart = catchAsync(async (req, res, next) => {
    const newDietChart = await DietChart.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            dietChart: newDietChart,
        },
    });
});

exports.updateDietChart = catchAsync(async (req, res, next) => {
    const dietChart = await DietChart.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!dietChart) {
        return next(new AppError('No diet chart found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            dietChart,
        },
    });
});

exports.deleteDietChart = catchAsync(async (req, res, next) => {
    const dietChart = await DietChart.findByIdAndDelete(req.params.id);
    if (!dietChart) {
        return next(new AppError('No diet chart found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
});