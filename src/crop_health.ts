import type { components, paths } from "../generated/crop_health";
import createClient, { Middleware } from "openapi-fetch";


const myMiddleware: Middleware = {
  async onRequest({ request, options }) {
    console.log(request.headers)
    return request;
  },
  async onResponse({ request, response, options }) {
    const { body, ...resOptions } = response;
    // change status of response
    return new Response(body, { ...resOptions, status: 200 });
  },
};

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
    client.use(myMiddleware)
    const { POST } = client

    return POST("/predictions/binary", {
      body: image,
      bodySerializer: (data: any) => data  //Override openapi-fetch's serializer to do nothing.
    });
  }
}