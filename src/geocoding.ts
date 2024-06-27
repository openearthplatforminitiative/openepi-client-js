import type { paths } from '../generated/geocoding';
import createClient from 'openapi-fetch';

export default class GeocoderClient {
  constructor(
    private readonly baseUrl: string = 'https://api-test.openepi.io/geocoding'
  ) {}

  async getGeocoding(query: paths['/']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/', { params: { query } });
  }

  async getReverseGeocoding(
    query: paths['/reverse']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/reverse', { params: { query } });
  }
}
