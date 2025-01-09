const express = require('express');
const patientController = require('../controllers/patientControllers');
const authController = require('../controllers/authController');
const router = express.Router();

// router.use(authController.protect);

router.route('/')
    .get(patientController.getAllPatients)
    .post(patientController.createPatient);

router.route('/:id')
    .get(patientController.getPatient)
    .patch(patientController.updatePatient)
    .delete(patientController.deletePatient);

module.exports = router;