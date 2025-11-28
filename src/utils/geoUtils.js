// This file contains utility functions for geographical calculations.

const geolib = require('geolib');

// Function to calculate the distance between two geographical points
const calculateDistance = (pointA, pointB) => {
    return geolib.getDistance(pointA, pointB);
};

// Function to find nearby properties based on a given location and radius
const findNearbyProperties = (properties, location, radius) => {
    return properties.filter(property => {
        const distance = calculateDistance(location, {
            latitude: property.latitude,
            longitude: property.longitude
        });
        return distance <= radius;
    });
};

// Function to convert degrees to radians
const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};

// Function to convert radians to degrees
const toDegrees = (radians) => {
    return radians * (180 / Math.PI);
};

module.exports = {
    calculateDistance,
    findNearbyProperties,
    toRadians,
    toDegrees
};