import type { paths } from '../generated/geocoding';
import createClient from 'openapi-fetch';

/**
 * A Client class for querying the geocoding API.
 */
export default class GeocoderClient {
  /**
   * Creates an instance of GeocoderClient.
   * @param {string} [baseUrl='https://photon.komoot.io'] - The base URL for the geocoding API.
   */
  constructor(private readonly baseUrl: string = 'https://photon.komoot.io') {}

  /**
   * Gets geocoding data from the geocoding API.
   * @param {paths['/api']['get']['parameters']['query']} query - The query parameters for the geocoding request.
   * @returns {Promise<FetchResponse>} The response from the geocoding endpoint.
   */
  async getGeocoding(query: paths['/api']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/api', { params: { query } });
  }

  /**
   * Gets reverse geocoding data from the geocoding API.
   * @param {paths['/reverse']['get']['parameters']['query']} query - The query parameters for the reverse geocoding request.
   * @returns {Promise<FetchResponse>} The response from the reverse geocoding endpoint.
   */
  async getReverseGeocoding(
    query: paths['/reverse']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/reverse', { params: { query } });
  }
}
