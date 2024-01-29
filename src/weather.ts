import type { paths } from "../generated/weather";
import createClient from "openapi-fetch";

export default class WeatherClient {
  constructor(
    private readonly baseUrl: string = "https://api-test.openepi.io/weather",
  ) {}

  async getLocationForecast(
    query: paths["/locationforecast"]["get"]["parameters"]["query"],
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/locationforecast", { params: { query } });
  }

  async getSunrise(query: paths["/sunrise"]["get"]["parameters"]["query"]) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/sunrise", { params: { query } });
  }
}
