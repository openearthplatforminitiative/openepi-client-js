import type { paths } from "../generated/flood";
import createClient from "openapi-fetch";

export default class FloodClient {
  constructor(
    private readonly baseUrl: string = "https://api-test.openepi.io/flood",
  ) {}

  async getSummaryForecast(
    query: paths["/summary"]["get"]["parameters"]["query"],
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/summary", { params: { query } });
  }

  async getDetailedForecast(
    query: paths["/detailed"]["get"]["parameters"]["query"],
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/detailed", { params: { query } });
  }

  async getThresholds(
    query: paths["/threshold"]["get"]["parameters"]["query"],
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/threshold", { params: { query } });
  }
}
