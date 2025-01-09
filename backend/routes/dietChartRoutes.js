const express = require('express');
const dietChartController = require('../controllers/dietChartControllers');
const router = express.Router();

router.route('/')
    .get(dietChartController.getAllDietCharts)
    .post(dietChartController.createDietChart);

router.route('/:id')
    .get(dietChartController.getDietChart)
    .patch(dietChartController.updateDietChart)
    .delete(dietChartController.deleteDietChart);

module.exports = router;