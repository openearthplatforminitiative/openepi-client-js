import { SoilClient } from '../src';

const client = new SoilClient();

test('fetches soil type', async () => {
  const result = await client.getSoilType({
    lat: 60.1,
    lon: 9.58,
  });
  expect(result.data).toHaveProperty('geometry');
});

test('fetches soil property', async () => {
  const result = await client.getSoilProperty({
    lon: 9.58,
    lat: 60.1,
    depths: ['0-5cm'],
    properties: ['bdod'],
    values: ['mean'],
  });
  expect(result.data).toHaveProperty('geometry');
});

test('fetches soil type summary', async () => {
  const result = await client.getSoilTypeSummary({
    min_lon: 9.5,
    max_lon: 9.6,
    min_lat: 60.1,
    max_lat: 60.12,
  });
  expect(result.data).toHaveProperty('geometry');
});
