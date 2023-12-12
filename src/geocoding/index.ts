import type {paths} from "./types";
import createClient from "openapi-fetch";


export default class GeocoderClient {
    constructor(private readonly baseUrl: string = "https://api-test.openepi.io/geocoding") {}

    async getGeocoding(q: string, lon?: number, lat?: number, lang?: string, limit?: number) {
        const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
        return GET("/", { params: { query: { q, lon, lat, lang, limit } } });
    }

    async getReverseGeocoding(lon: number, lat: number, lang?: string, limit?: number) {
        const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
        return GET("/reverse", {params: {query: {lon, lat, lang, limit}}});
    }
}
