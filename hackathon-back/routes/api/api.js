const express = require('express');

const SubscriberRoutes = require('./subscriber');
const ForecastRoutes = require('./forecast');

const router = express.Router();

router.use('/user', SubscriberRoutes);
router.use('/forecasr', ForecastRoutes);

module.exports = router;