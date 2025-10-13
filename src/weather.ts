import type {
  paths as weatherPaths,
  definitions as weatherDefinitions,
} from '../generated/weather';
import type { paths as sunrisePaths } from '../generated/sunrise';
import createClient from 'openapi-fetch';

/**
 * A Client class for querying the weather API.
 */
export default class WeatherClient {
  private readonly weatherClient: ReturnType<typeof createClient<weatherPaths>>;
  private readonly sunriseClient: ReturnType<typeof createClient<sunrisePaths>>;

  /**
   * Creates an instance of WeatherClient.
   * @param {string} [weatherBaseUrl='https://api.met.no/weatherapi/locationforecast/2.0'] - The base URL for the forecast API.
   * @param {string} [sunriseBaseUrl='https://api.met.no/weatherapi/sunrise/3.0'] - The base URL for the forecast API.
   */
  constructor(
    private readonly weatherBaseUrl: string = 'https://api.met.no/weatherapi/locationforecast/2.0',
    private readonly sunriseBaseUrl: string = 'https://api.met.no/weatherapi/sunrise/3.0',
    private readonly defaultHeader: Record<string, string> = {
      'User-Agent':
        'openepi.io github.com/openearthplatforminitiative/openepi-client-js',
    }
  ) {
    this.weatherClient = createClient<weatherPaths>({
      baseUrl: this.weatherBaseUrl,
    });
    this.sunriseClient = createClient<sunrisePaths>({
      baseUrl: this.sunriseBaseUrl,
    });
  }

  /**
   * Gets location forecast data from the weather API.
   * @param {weatherPaths['/complete']['get']['parameters']['query']} query - The query parameters for the location forecast request.
   * @returns {Promise<FetchResponse>} The response from the location forecast endpoint with typed data.
   */
  async getLocationForecast(
    query: weatherPaths['/complete']['get']['parameters']['query'],
    header: Record<string, string> = {}
  ): Promise<{
    data?: weatherDefinitions['METJSONForecast'];
    error?: unknown;
    response: Response;
  }> {
    const { GET } = createClient<weatherPaths>({
      baseUrl: this.weatherBaseUrl,
    });
    const result = await GET('/complete', {
      params: { query, header: { ...this.defaultHeader, ...header } },
    });
    // Cast to proper type since Swagger 2.0 types don't match openapi-fetch's expectations
    return result as any;
  }

  /**
   * Gets sunrise data from the weather API.
   * @param {sunrisePaths['/sun']['get']['parameters']['query']} query - The query parameters for the sunrise request.
   * @returns {Promise<FetchResponse>} The response from the sunrise endpoint with typed data.
   */
  async getSunrise(
    query: sunrisePaths['/sun']['get']['parameters']['query'],
    header: Record<string, string> = {}
  ): Promise<{
    data?: string;
    error?: unknown;
    response: Response;
  }> {
    const { GET } = createClient<sunrisePaths>({
      baseUrl: this.sunriseBaseUrl,
    });
    const result = await GET('/sun', {
      params: { query, header: { ...this.defaultHeader, ...header } },
    });
    // Cast to proper type since Swagger 2.0 types don't match openapi-fetch's expectations
    return result as any;
  }
}
