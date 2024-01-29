import type { paths } from "../generated/deforestation";
import createClient from "openapi-fetch";

export default class DeforestationClient {
  constructor(
    private readonly baseUrl: string = "https://api-test.openepi.io/deforestation",
  ) {}

  async getBasin(query: paths["/basin"]["get"]["parameters"]["query"]) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/basin", { params: { query } });
  }
}
