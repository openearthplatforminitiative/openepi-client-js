import type { paths } from '../generated/crop_health';
import createClient from 'openapi-fetch';

type PredictionType = 'binary' | 'single-HLT' | 'multi-HLT';

/**
 * A Client class for quering the crop health api
 */
export default class CropHealthClient {
  /**
   * Creates an instance of CropHealthClient.
   * @param {string} [baseUrl='https:/api.openepi.io/crop-health'] The base URL for the crop health API.
   */
  constructor(
    private readonly baseUrl: string = 'https:/api.openepi.io/crop-health'
  ) {}

  /**
   * Pings the crop health API.
   * @param {paths['/ping']['get']} query The query parameters for the ping request.
   * @returns {Promise<FetchResponse>} The response from the ping endpoint.
   */
  async getPing(query: paths['/ping']['get']) {
    const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
    return GET('/ping');
  }

  /**
   * Gets a prediction from the crop health API.
   * @param {Buffer} image The image buffer to be sent for prediction.
   * @param {PredictionType} endpoint The type of prediction to be used.
   * @returns {Promise<FetchResponse>} The response from the prediction endpoint.
   */
  async getPrediction(image: Buffer, endpoint: PredictionType) {
    const { POST } = createClient<paths>({ baseUrl: this.baseUrl });

    return POST(`/predictions/${endpoint}`, {
      body: image,
      bodySerializer: (data: any) => data, //Override openapi-fetch's defaultSerializer which converts everything to a JSON string
    });
  }

  /**
   * Gets a binary prediction from the crop health API.
   * @param {Buffer} image The image buffer to be sent for binary prediction.
   * @returns {Promise<FetchResponse>} The response from the binary prediction endpoint.
   */
  async getBinaryPrediction(image: Buffer) {
    return this.getPrediction(image, 'binary');
  }

  /**
   * Gets a single-HLT prediction from the crop health API.
   * @param {Buffer} image The image buffer to be sent for single-HLT prediction.
   * @returns {Promise<FetchResponse>} The response from the single-HLT prediction endpoint.
   */
  async getSingleHLTPrediction(image: Buffer) {
    return this.getPrediction(image, 'single-HLT');
  }

  /**
   * Gets a multi-HLT prediction from the crop health API.
   * @param {Buffer} image The image buffer to be sent for multi-HLT prediction.
   * @returns {Promise<FetchResponse>} The response from the multi-HLT prediction endpoint.
   */
  async getMultiHLTPrediction(image: Buffer) {
    return this.getPrediction(image, 'multi-HLT');
  }
}
