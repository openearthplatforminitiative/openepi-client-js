import type { paths } from '../generated/agriculture';
import createClient from 'openapi-fetch';

/**
 * A Client class for quering the agriculture API.
 */
export default class AgricultureClient {
  /**
   * Creates an instance of AgricultureClient.
   * @param {string} [baseUrl='https://api.openepi.io/weather'] - The base URL for the agriculture API.
   */
  constructor(
    private readonly baseUrl: string = 'https://api.openepi.io/agriculture'
  ) {}

  /**
   * Gets a summary of aggregated data from Deforestation, Flood, Weather and Soil APIs.
   * @param query - The query parameters for the agriculture summary request.
   * @returns The response from the agriculture summary endpoint.
   */
  async getSummary(query: paths['/summary']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/summary', { params: { query } });
  }
}
