const PantryStaff = require('../models/pantryStaffModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPantryStaff = catchAsync(async (req, res, next) => {
    const pantryStaff = await PantryStaff.find();
    res.status(200).json({
        status: 'success',
        results: pantryStaff.length,
        data: {
            pantryStaff,
        },
    });
});

exports.getPantryStaff = catchAsync(async (req, res, next) => {
    const pantryStaff = await PantryStaff.findById(req.params.id);
    if (!pantryStaff) {
        return next(new AppError('No pantry staff found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            pantryStaff,
        },
    });
});

exports.createPantryStaff = catchAsync(async (req, res, next) => {
    const newPantryStaff = await PantryStaff.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            pantryStaff: newPantryStaff,
        },
    });
});

exports.updatePantryStaff = catchAsync(async (req, res, next) => {
    const pantryStaff = await PantryStaff.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!pantryStaff) {
        return next(new AppError('No pantry staff found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            pantryStaff,
        },
    });
});

exports.deletePantryStaff = catchAsync(async (req, res, next) => {
    const pantryStaff = await PantryStaff.findByIdAndDelete(req.params.id);
    if (!pantryStaff) {
        return next(new AppError('No pantry staff found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
});