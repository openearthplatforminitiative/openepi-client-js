import type { components, paths } from "../generated/crop_health";
import createClient, { Middleware } from "openapi-fetch";

export default class CropHealthClient {
  constructor(
    private readonly baseUrl: string = "https://api-test.openepi.io/crop-health"
  ) {}

  async getPing(query: paths["/ping"]["get"]) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET("/ping")
  }

  async getBinaryPrediction(
    image: Buffer
  ) {
    const client = createClient<paths>({ baseUrl: this.baseUrl });
    const { POST } = client

    return POST("/predictions/binary", {
      body: image,
      bodySerializer: (data: any) => data  //Override openapi-fetch's serializer to do nothing.
    });
  }
}