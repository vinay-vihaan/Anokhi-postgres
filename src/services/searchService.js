import { Property } from '../models';

const searchProperties = async (criteria) => {
    const { location, priceRange, bedrooms, bathrooms, amenities } = criteria;

    const whereClause = {};
    
    if (location) {
        whereClause.location = location;
    }
    
    if (priceRange) {
        whereClause.price = {
            [Op.between]: [priceRange.min, priceRange.max]
        };
    }
    
    if (bedrooms) {
        whereClause.bedrooms = bedrooms;
    }
    
    if (bathrooms) {
        whereClause.bathrooms = bathrooms;
    }
    
    if (amenities && amenities.length > 0) {
        whereClause.amenities = {
            [Op.contains]: amenities
        };
    }

    try {
        const properties = await Property.findAll({
            where: whereClause
        });
        return properties;
    } catch (error) {
        throw new Error('Error fetching properties: ' + error.message);
    }
};

export default {
    searchProperties
};