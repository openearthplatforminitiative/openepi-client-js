import { GeocoderClient } from '../src';

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
