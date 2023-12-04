import type {paths} from "./types";
import createClient from "openapi-fetch";


export default class WeatherClient {
    constructor(private readonly baseUrl: string = "https://api-test.openepi.io/weather") {}

    async getSunrise(lon: number, lat: number, date?: string) {
        const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
        return GET("/sunrise", { params: { query: { lon, lat, date } } });
    }

    async reverseGeocode(lon: number, lat: number, altitude: number) {
        const { GET } = createClient<paths>({ baseUrl: this.baseUrl });
        return GET("/locationforecast", {params: {query: {lon, lat, altitude}}});
    }
}
