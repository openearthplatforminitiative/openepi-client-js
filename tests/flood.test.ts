import { FloodClient } from "../src";

const client = new FloodClient();

test("fetches summary", async () => {
  const result = await client.getSummaryForecast({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty("queried_location");
});

test("fetches detailed", async () => {
  const result = await client.getDetailedForecast({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty("queried_location");
});

test("fetches thresholds", async () => {
  const result = await client.getThresholds({
    lat: -1.79597,
    lon: 29.922001,
  });
  expect(result.data).toHaveProperty("queried_location");
});
