const Patient = require('../models/patientModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllPatients = catchAsync(async (req, res, next) => {
    const patients = await Patient.find();
    res.status(200).json({
        status: 'success',
        results: patients.length,
        data: {
            // message: 'This route is not yet defined',
            patients
        },
    });
});

exports.getPatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
        return next(new AppError('No patient found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            patient,
        },
    });
});

exports.createPatient = catchAsync(async (req, res, next) => {
    const newPatient = await Patient.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            patient: newPatient,
        },
    });
});

exports.updatePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!patient) {
        return next(new AppError('No patient found with that ID', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            patient,
        },
    });
});

exports.deletePatient = catchAsync(async (req, res, next) => {
    const patient = await Patient.findByIdAndDelete(req.params.id);
    if (!patient) {
        return next(new AppError('No patient found with that ID', 404));
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
});