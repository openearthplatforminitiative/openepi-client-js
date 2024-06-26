import type { paths } from '../generated/soil';
import createClient from 'openapi-fetch';

export default class SoilClient {
  constructor(
    private readonly baseUrl: string = 'https://api-test.openepi.io/soil'
  ) {}

  async getSoilType(query: paths['/type']['get']['parameters']['query']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/type', { params: { query } });
  }

  async getSoilProperty(
    query: paths['/property']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/property', { params: { query } });
  }

  async getSoilTypeSummary(
    query: paths['/type/summary']['get']['parameters']['query']
  ) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/type/summary', { params: { query } });
  }
}
