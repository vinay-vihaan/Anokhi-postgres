
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');
const routes = require('./routes/index');
const propertyTypeRoutes = require('./routes/propertyTypeRoutes');
const listingRoutes = require('./routes/listingRoutes');
const leadRoutes = require('./routes/leadRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');
// const builderUserRoutes = require('./routes/builderUserRoutes');
const builderRoutes = require('./routes/builderRoutes');
const adminDashboardRoutes = require('./routes/adminDashboardRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const amenityRoutes = require('./routes/amenityRoutes');
const savedSearchRoutes = require('./routes/savedSearchRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(rateLimiter);

// Routes
app.use('/api', routes);
app.use('/api/property-types', propertyTypeRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/favorites', favoriteRoutes);
// app.use('/api/builder-users', builderUserRoutes);
app.use('/api/builders', builderRoutes);
app.use('/api/admin-dashboard', adminDashboardRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/amenities', amenityRoutes);
app.use('/api/saved-searches', savedSearchRoutes);


// Error handling middleware
app.use(errorHandler);

module.exports = app;
