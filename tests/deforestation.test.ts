import { DeforestationClient } from '../src';

const client = new DeforestationClient();

test('fetches basin', async () => {
  const result = await client.getBasin({ lat: 10, lon: 10 });
  expect(result.data).toHaveProperty('features');
});
