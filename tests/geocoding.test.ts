import { GeocoderClient } from '../src';

// Mock the GeocoderClient methods
jest.mock('../src', () => {
  return {
    GeocoderClient: jest.fn().mockImplementation(() => {
      return {
        getReverseGeocoding: jest
          .fn()
          .mockResolvedValue({ data: { features: [] } }),
        getGeocoding: jest.fn().mockResolvedValue({ data: { features: [] } }),
      };
    }),
  };
});

const client = new GeocoderClient();

test('fetching reverse geocode', async () => {
  const result = await client.getReverseGeocoding({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty('features');
});

test('fetching geocode', async () => {
  const result = await client.getGeocoding({
    q: 'Berlin',
  });
  expect(result.data).toHaveProperty('features');
});
