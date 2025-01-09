const express = require('express');
const deliveryPersonnelController = require('../controllers/deliverPersonnelControllers');
const router = express.Router();

router.route('/')
    .get(deliveryPersonnelController.getAllDeliveryPersonnel)
    .post(deliveryPersonnelController.createDeliveryPersonnel);

router.route('/:id')
    .get(deliveryPersonnelController.getDeliveryPersonnel)
    .patch(deliveryPersonnelController.updateDeliveryPersonnel)
    .delete(deliveryPersonnelController.deleteDeliveryPersonnel);

module.exports = router;