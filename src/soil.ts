import type { paths } from '../generated/soil';
import createClient from 'openapi-fetch';

/**
 * A Client class for querying the soil API.
 */
export default class SoilClient {
  /**
   * Creates an instance of SoilClient.
   * @param {string} [baseUrl='https://api.openepi.io/soil'] - The base URL for the soil API.
   */
  constructor(
    private readonly baseUrl: string = 'https://api.openepi.io/soil'
  ) {}

  /**
   * Gets soil type data from the soil API.
   * @param {paths['/type']['get']['parameters']['query']} query - The query parameters for the soil type request.
   * @returns {Promise<FetchResponse>} The response from the soil type endpoint.
   */
  async getSoilType(query: paths['/type']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/type', { params: { query } });
  }

  /**
   * Gets soil property data from the soil API.
   * @param {paths['/property']['get']['parameters']['query']} query - The query parameters for the soil property request.
   * @returns {Promise<FetchResponse>} The response from the soil property endpoint.
   */
  async getSoilProperty(
    query: paths['/property']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/property', { params: { query } });
  }

  /**
   * Gets soil type summary data from the soil API.
   * @param {paths['/type/summary']['get']['parameters']['query']} query - The query parameters for the soil type summary request.
   * @returns {Promise<FetchResponse>} The response from the soil type summary endpoint.
   */
  async getSoilTypeSummary(
    query: paths['/type/summary']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/type/summary', { params: { query } });
  }
}
