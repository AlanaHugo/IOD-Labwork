const request = require('supertest');
const app = require('../index'); // Adjust path if your server file is elsewhere

describe('GET /api/products', () => {
  it('should return an array of products with valid categories', async () => {
    const response = await request(app).get('/api/products');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);

    // Check categories
    const categories = response.body.map(p => p.category);
    const uniqueCategories = new Set(categories);

    expect(uniqueCategories.size).toBeGreaterThan(0); // At least 1 category
    expect(typeof categories[0]).toBe('string'); // Ensure category is a string
  });
});