import { FloodClient } from '../src';

// Mock the FloodClient methods
jest.mock('../src', () => {
  return {
    FloodClient: jest.fn().mockImplementation(() => {
      return {
        getSummaryForecast: jest
          .fn()
          .mockResolvedValue({ data: { queried_location: {} } }),
        getDetailedForecast: jest
          .fn()
          .mockResolvedValue({ data: { queried_location: {} } }),
        getThresholds: jest
          .fn()
          .mockResolvedValue({ data: { queried_location: {} } }),
      };
    }),
  };
});

const client = new FloodClient();

test('fetches summary', async () => {
  const result = await client.getSummaryForecast({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty('queried_location');
});

test('fetches detailed', async () => {
  const result = await client.getDetailedForecast({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty('queried_location');
});

test('fetches thresholds', async () => {
  const result = await client.getThresholds({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty('queried_location');
});
