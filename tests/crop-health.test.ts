import { CropHealthClient } from '../src';
import * as fs from 'fs';

const client = new CropHealthClient();
const image = fs.readFileSync('./tests/assets/plant.jpg');

test('fetches binary prediction', async () => {
  const result = await client.getBinaryPrediction(image);
  expect(result.data).toHaveProperty('HLT');
});

test('fetches single-HLT prediction', async () => {
  const result = await client.getSingleHLTPrediction(image);
  expect(result.data).toHaveProperty('HLT');
});

test('fetches multi-HLT prediction', async () => {
  const result = await client.getMultiHLTPrediction(image);
  expect(result.data).toHaveProperty('HLT_maize');
});
