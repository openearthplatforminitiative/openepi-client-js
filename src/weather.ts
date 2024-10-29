import type { paths } from '../generated/weather';
import createClient from 'openapi-fetch';

/**
 * A Client class for querying the weather API.
 */
export default class WeatherClient {
  /**
   * Creates an instance of WeatherClient.
   * @param {string} [baseUrl='https://api-test.openepi.io/weather'] - The base URL for the weather API.
   */
  constructor(
    private readonly baseUrl: string = 'https://api-test.openepi.io/weather'
  ) {}

  /**
   * Gets location forecast data from the weather API.
   * @param {paths['/locationforecast']['get']['parameters']['query']} query - The query parameters for the location forecast request.
   * @returns {Promise<FetchResponse>} The response from the location forecast endpoint.
   */
  async getLocationForecast(
    query: paths['/locationforecast']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/locationforecast', { params: { query } });
  }

  /**
   * Gets sunrise data from the weather API.
   * @param {paths['/sunrise']['get']['parameters']['query']} query - The query parameters for the sunrise request.
   * @returns {Promise<FetchResponse>} The response from the sunrise endpoint.
   */
  async getSunrise(query: paths['/sunrise']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/sunrise', { params: { query } });
  }
}
