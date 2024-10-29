import type { paths } from '../generated/deforestation';
import createClient from 'openapi-fetch';

/**
 * A Client class for querying the deforestation API.
 */
export default class DeforestationClient {
  /**
   * Creates an instance of DeforestationClient.
   * @param {string} [baseUrl='https://api-test.openepi.io/deforestation'] - The base URL for the deforestation API.
   */
  constructor(
    private readonly baseUrl: string = 'https://api-test.openepi.io/deforestation'
  ) {}

  /**
   * Gets basin data from the deforestation API.
   * @param {paths['/basin']['get']['parameters']['query']} query The query parameters for the basin request.
   * @returns {Promise<FetchResponse>} The response from the basin endpoint.
   */
  async getBasin(query: paths['/basin']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/basin', { params: { query } });
  }
}
