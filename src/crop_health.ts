import type { components, paths } from '../generated/crop_health';
import createClient, { FetchResponse } from 'openapi-fetch';

type PredictionType = 'binary' | 'single-HLT' | 'multi-HLT';
type BinaryResponse = components['schemas']['BinaryHealthPredictionResponse'];
type SingleHLTResponse =
  components['schemas']['SingleHLTHealthPredictionResponse'];
type MultiHLTResponse =
  components['schemas']['MultiHLTHealthPredictionResponse'];

export default class CropHealthClient {
  constructor(
    private readonly baseUrl: string = 'https://api-test.openepi.io/crop-health'
  ) {}

  async getPing(query: paths['/ping']['get']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/ping');
  }

  async getPrediction(image: Buffer, endpoint: PredictionType) {
    const { POST } = createClient<paths>({ baseUrl: this.baseUrl });

    return POST(`/predictions/${endpoint}`, {
      body: image,
      bodySerializer: (data: any) => data, //Override openapi-fetch's defaultSerializer which converts everything to a JSON string
    });
  }

  async getBinaryPrediction(image: Buffer) {
    return this.getPrediction(image, 'binary');
  }

  async getSingleHLTPrediction(image: Buffer) {
    return this.getPrediction(image, 'single-HLT');
  }

  async getMultiHLTPrediction(image: Buffer) {
    return this.getPrediction(image, 'multi-HLT');
  }
}
