const request = require('supertest');
const app = require('../../src/app');
const db = require('../../src/models');

describe('Authentication Integration Tests', () => {
    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    afterAll(async () => {
        await db.sequelize.close();
    });

    describe('POST /auth/register', () => {
        it('should register a new user', async () => {
            const response = await request(app)
                .post('/auth/register')
                .send({
                    full_name: 'John Doe',
                    email: 'john@example.com',
                    phone: '1234567890',
                    password: 'password123'
                });
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('token');
        });

        it('should return 400 for duplicate email', async () => {
            await request(app)
                .post('/auth/register')
                .send({
                    full_name: 'Jane Doe',
                    email: 'john@example.com',
                    phone: '0987654321',
                    password: 'password123'
                });
            const response = await request(app)
                .post('/auth/register')
                .send({
                    full_name: 'Jane Doe',
                    email: 'john@example.com',
                    phone: '0987654321',
                    password: 'password123'
                });
            expect(response.status).toBe(400);
        });
    });

    describe('POST /auth/login', () => {
        it('should login an existing user', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: 'john@example.com',
                    password: 'password123'
                });
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });

        it('should return 401 for invalid credentials', async () => {
            const response = await request(app)
                .post('/auth/login')
                .send({
                    email: 'john@example.com',
                    password: 'wrongpassword'
                });
            expect(response.status).toBe(401);
        });
    });

    describe('POST /auth/refresh', () => {
        it('should refresh the token', async () => {
            const loginResponse = await request(app)
                .post('/auth/login')
                .send({
                    email: 'john@example.com',
                    password: 'password123'
                });
            const response = await request(app)
                .post('/auth/refresh')
                .set('Authorization', `Bearer ${loginResponse.body.token}`);
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });

        it('should return 401 for invalid token', async () => {
            const response = await request(app)
                .post('/auth/refresh')
                .set('Authorization', 'Bearer invalidtoken');
            expect(response.status).toBe(401);
        });
    });
});