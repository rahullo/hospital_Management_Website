const DeliveryPersonnel = require('../models/deliveryPersonnelModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllDeliveryPersonnel = catchAsync(async (req, res, next) => {
    const deliveryPersonnel = await DeliveryPersonnel.find();
    res.status(200).json({
        status: 'success',
        results: deliveryPersonnel.length,
        data: {
            deliveryPersonnel,
        },
    });
});

exports.getDeliveryPersonnel = catchAsync(async (req, res, next) => {
    const deliveryPersonnel = await DeliveryPersonnel.findById(req.params.id);
    if (!deliveryPersonnel) {
        return next(new AppError('No delivery personnel found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            deliveryPersonnel,
        },
    });
});

exports.createDeliveryPersonnel = catchAsync(async (req, res, next) => {
    const newDeliveryPersonnel = await DeliveryPersonnel.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            deliveryPersonnel: newDeliveryPersonnel,
        },
    });
});

exports.updateDeliveryPersonnel = catchAsync(async (req, res, next) => {
    const deliveryPersonnel = await DeliveryPersonnel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!deliveryPersonnel) {
        return next(new AppError('No delivery personnel found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            deliveryPersonnel,
        },
    });
});

exports.deleteDeliveryPersonnel = catchAsync(async (req, res, next) => {
    const deliveryPersonnel = await DeliveryPersonnel.findByIdAndDelete(req.params.id);
    if (!deliveryPersonnel) {
        return next(new AppError('No delivery personnel found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
});