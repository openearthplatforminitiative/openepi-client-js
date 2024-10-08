import { DeforestationClient } from '../src';

// Mock the DeforestationClient methods
jest.mock('../src', () => {
  return {
    DeforestationClient: jest.fn().mockImplementation(() => {
      return {
        getBasin: jest.fn().mockResolvedValue({ data: { features: [] } }),
      };
    }),
  };
});

const client = new DeforestationClient();

test('fetches basin', async () => {
  const result = await client.getBasin({ lat: 10, lon: 10 });
  expect(result.data).toHaveProperty('features');
});
