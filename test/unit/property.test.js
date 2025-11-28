const request = require('supertest');
const app = require('../../src/app');
const { Property } = require('../../src/models');

describe('Property API', () => {
    beforeAll(async () => {
        await Property.sync({ force: true }); // Reset the database before tests
    });

    afterAll(async () => {
        await Property.drop(); // Clean up after tests
    });

    describe('POST /properties', () => {
        it('should create a new property', async () => {
            const propertyData = {
                user_id: 1,
                builder_id: 1,
                type_id: 1,
                area_id: 1,
                title: 'Luxury Apartment',
                description: 'A beautiful luxury apartment in Hyderabad.',
                listing_type: 'sale',
                price: 10000000,
                area: 2000,
                bedrooms: 3,
                bathrooms: 2,
                status: 'available',
                images: ['image1.jpg', 'image2.jpg'],
                amenities: ['gym', 'pool'],
                tags: ['luxury', 'apartment'],
                location: 'Hyderabad',
                ai_price_estimate: 9500000,
                eco_rating: 'A',
            };

            const response = await request(app)
                .post('/properties')
                .send(propertyData)
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.title).toBe(propertyData.title);
        });
    });

    describe('GET /properties', () => {
        it('should return a list of properties', async () => {
            const response = await request(app)
                .get('/properties')
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('GET /properties/:id', () => {
        it('should return a property by id', async () => {
            const property = await Property.create({
                user_id: 1,
                builder_id: 1,
                type_id: 1,
                area_id: 1,
                title: 'Luxury Apartment',
                description: 'A beautiful luxury apartment in Hyderabad.',
                listing_type: 'sale',
                price: 10000000,
                area: 2000,
                bedrooms: 3,
                bathrooms: 2,
                status: 'available',
                images: ['image1.jpg', 'image2.jpg'],
                amenities: ['gym', 'pool'],
                tags: ['luxury', 'apartment'],
                location: 'Hyderabad',
                ai_price_estimate: 9500000,
                eco_rating: 'A',
            });

            const response = await request(app)
                .get(`/properties/${property.id}`)
                .expect(200);

            expect(response.body).toHaveProperty('id', property.id);
        });
    });

    describe('PUT /properties/:id', () => {
        it('should update a property', async () => {
            const property = await Property.create({
                user_id: 1,
                builder_id: 1,
                type_id: 1,
                area_id: 1,
                title: 'Luxury Apartment',
                description: 'A beautiful luxury apartment in Hyderabad.',
                listing_type: 'sale',
                price: 10000000,
                area: 2000,
                bedrooms: 3,
                bathrooms: 2,
                status: 'available',
                images: ['image1.jpg', 'image2.jpg'],
                amenities: ['gym', 'pool'],
                tags: ['luxury', 'apartment'],
                location: 'Hyderabad',
                ai_price_estimate: 9500000,
                eco_rating: 'A',
            });

            const updatedData = { title: 'Updated Luxury Apartment' };

            const response = await request(app)
                .put(`/properties/${property.id}`)
                .send(updatedData)
                .expect(200);

            expect(response.body.title).toBe(updatedData.title);
        });
    });

    describe('DELETE /properties/:id', () => {
        it('should delete a property', async () => {
            const property = await Property.create({
                user_id: 1,
                builder_id: 1,
                type_id: 1,
                area_id: 1,
                title: 'Luxury Apartment',
                description: 'A beautiful luxury apartment in Hyderabad.',
                listing_type: 'sale',
                price: 10000000,
                area: 2000,
                bedrooms: 3,
                bathrooms: 2,
                status: 'available',
                images: ['image1.jpg', 'image2.jpg'],
                amenities: ['gym', 'pool'],
                tags: ['luxury', 'apartment'],
                location: 'Hyderabad',
                ai_price_estimate: 9500000,
                eco_rating: 'A',
            });

            await request(app)
                .delete(`/properties/${property.id}`)
                .expect(204);

            const deletedProperty = await Property.findByPk(property.id);
            expect(deletedProperty).toBeNull();
        });
    });
});