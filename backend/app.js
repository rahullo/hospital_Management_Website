const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const patientRouter = require('./routes/patientRoutes');
const dietChartRouter = require('./routes/dietChartRoutes');
const pantryStaffRouter = require('./routes/pantryStaffRoutes');
const deliveryPersonnelRouter = require('./routes/deliveryPersonnelRoutes');
const authRouter = require('./routes/authRoutes');
const AppError = require('./utils/appError');
// const globalErrorHandler = require('./controllers/errorController');

const app = express();

// 1) MIDDLEWARES
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json()); // Express builtin Middleware

app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 2) ROUTES
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/patients', patientRouter);
app.use('/api/v1/dietCharts', dietChartRouter);
app.use('/api/v1/pantryStaff', pantryStaffRouter);
app.use('/api/v1/deliveryPersonnel', deliveryPersonnelRouter);

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'Welcome to the Hospital Food Delivery Management API',
    });
});

module.exports = app;