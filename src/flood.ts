import type { paths } from '../generated/flood';
import createClient from 'openapi-fetch';

/**
 * A Client class for querying the flood API.
 */
export default class FloodClient {
  /**
   * Creates an instance of FloodClient.
   * @param {string} [baseUrl='https://api-test.openepi.io/flood'] - The base URL for the flood API.
   */
  constructor(
    private readonly baseUrl: string = 'https://api-test.openepi.io/flood'
  ) {}

  /**
   * Gets a summary forecast from the flood API.
   * @param {SummaryQuery} query - The query parameters for the summary forecast request.
   * @returns {Promise<FetchResponse>} The response from the summary forecast endpoint.
   */
  async getSummaryForecast(
    query: paths['/summary']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/summary', { params: { query } });
  }

  /**
   * Gets a detailed forecast from the flood API.
   * @param {paths['/detailed']['get']['parameters']['query']} query - The query parameters for the detailed forecast request.
   * @returns {Promise<FetchResponse>} The response from the detailed forecast endpoint.
   */
  async getDetailedForecast(
    query: paths['/detailed']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/detailed', { params: { query } });
  }

  /**
   * Gets threshold data from the flood API.
   * @param {paths['/threshold']['get']['parameters']['query']} query - The query parameters for the threshold request.
   * @returns {Promise<FetchResponse>} The response from the threshold endpoint.
   */
  async getThresholds(
    query: paths['/threshold']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/threshold', { params: { query } });
  }
}
