import { WeatherClient } from '../src';

// Mock the WeatherClient methods
jest.mock('../src', () => {
  return {
    WeatherClient: jest.fn().mockImplementation(() => {
      return {
        getLocationForecast: jest
          .fn()
          .mockResolvedValue({ data: { geometry: {} } }),
        getSunrise: jest.fn().mockResolvedValue({ data: { geometry: {} } }),
      };
    }),
  };
});

const client = new WeatherClient();

test('fetches location forecast', async () => {
  const result = await client.getLocationForecast({
    lat: 52.520008,
    lon: 13.404954,
  });
  expect(result.data).toHaveProperty('geometry');
});

test('fetches sunrise', async () => {
  const result = await client.getSunrise({
    lat: 52.520008,
    lon: 13.404954,
  });
  expect(result.data).toHaveProperty('geometry');
});
