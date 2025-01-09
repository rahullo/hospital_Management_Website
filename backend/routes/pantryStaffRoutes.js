const express = require('express');
const pantryStaffController = require('../controllers/pantryStaffController');
const router = express.Router();

router.route('/')
    .get(pantryStaffController.getAllPantryStaff)
    .post(pantryStaffController.createPantryStaff);

router.route('/:id')
    .get(pantryStaffController.getPantryStaff)
    .patch(pantryStaffController.updatePantryStaff)
    .delete(pantryStaffController.deletePantryStaff);

module.exports = router;