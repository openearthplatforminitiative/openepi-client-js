/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/locationforecast": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get weather forecast
         * @description Returns the weather forecast for the next 9 days for the given location
         */
        get: operations["get_forecast_locationforecast_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sunrise": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get sunrise and sunset information
         * @description Returns the sunrise time and sunset time for the given location
         */
        get: operations["get_sunrise_sunrise_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check if this service is alive
         * @description Returns a simple message to indicate that this service is alive
         */
        get: operations["liveness_health_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check if this service is ready to receive requests
         * @description Returns a message describing the status of this service
         */
        get: operations["ready_ready_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Data */
        Data: {
            /** @description Parameters which applies to this exact point in time */
            instant: components["schemas"]["Instant"];
            /** @description Parameters with validity times over twelve hours. Will not exist for all time steps. */
            next_12_hours?: components["schemas"]["Next12Hours"] | null;
            /** @description Parameters with validity times over one hour. Will not exist for all time steps. */
            next_1_hours?: components["schemas"]["Next1Hours"] | null;
            /** @description Parameters with validity times over six hours. Will not exist for all time steps. */
            next_6_hours?: components["schemas"]["Next6Hours"] | null;
        };
        /**
         * FeatureType
         * @constant
         * @enum {string}
         */
        FeatureType: "Feature";
        /** ForecastSummary */
        ForecastSummary: {
            symbol_code: components["schemas"]["WeatherSymbol"];
        };
        /** ForecastTimeInstant */
        ForecastTimeInstant: {
            /**
             * Air Pressure At Sea Level
             * @description Air pressure at sea level
             * @example 1017.23
             */
            air_pressure_at_sea_level?: number | null;
            /**
             * Air Temperature
             * @description Air temperature
             * @example 17.1
             */
            air_temperature?: number | null;
            /**
             * Cloud Area Fraction
             * @description Amount of sky covered by clouds.
             * @example 95.2
             */
            cloud_area_fraction?: number | null;
            /**
             * Cloud Area Fraction High
             * @description Amount of sky covered by clouds at high elevation.
             * @example 95.2
             */
            cloud_area_fraction_high?: number | null;
            /**
             * Cloud Area Fraction Low
             * @description Amount of sky covered by clouds at low elevation.
             * @example 95.2
             */
            cloud_area_fraction_low?: number | null;
            /**
             * Cloud Area Fraction Medium
             * @description Amount of sky covered by clouds at medium elevation.
             * @example 95.2
             */
            cloud_area_fraction_medium?: number | null;
            /**
             * Dew Point Temperature
             * @description Dew point temperature at sea level
             * @example 8.1
             */
            dew_point_temperature?: number | null;
            /**
             * Fog Area Fraction
             * @description Amount of area covered by fog.
             * @example 95.2
             */
            fog_area_fraction?: number | null;
            /**
             * Relative Humidity
             * @description Amount of humidity in the air.
             * @example 81.1
             */
            relative_humidity?: number | null;
            /**
             * Wind From Direction
             * @description The directon which moves towards
             * @example 121.3
             */
            wind_from_direction?: number | null;
            /**
             * Wind Speed
             * @description Speed of wind
             * @example 5.9
             */
            wind_speed?: number | null;
            /**
             * Wind Speed Of Gust
             * @description Speed of wind gust
             * @example 15.9
             */
            wind_speed_of_gust?: number | null;
        };
        /** ForecastTimePeriod */
        ForecastTimePeriod: {
            /**
             * Air Temperature Max
             * @description Maximum air temperature in period
             * @example 17.1
             */
            air_temperature_max?: number | null;
            /**
             * Air Temperature Min
             * @description Minimum air temperature in period
             * @example 11.1
             */
            air_temperature_min?: number | null;
            /**
             * Precipitation Amount
             * @description Best estimate for amount of precipitation for this period
             * @example 1.71
             */
            precipitation_amount?: number | null;
            /**
             * Precipitation Amount Max
             * @description Maximum amount of precipitation for this period
             * @example 4.32
             */
            precipitation_amount_max?: number | null;
            /**
             * Precipitation Amount Min
             * @description Minimum amount of precipitation for this period
             * @example 4.32
             */
            precipitation_amount_min?: number | null;
            /**
             * Probability Of Precipitation
             * @description Probability of any precipitation coming for this period
             * @example 37
             */
            probability_of_precipitation?: number | null;
            /**
             * Probability Of Thunder
             * @description Probability of any thunder coming for this period
             * @example 54.32
             */
            probability_of_thunder?: number | null;
            /**
             * Ultraviolet Index Clear Sky Max
             * @description Maximum ultraviolet index if sky is clear
             * @example 1
             */
            ultraviolet_index_clear_sky_max?: number | null;
        };
        /** ForecastTimeStep */
        ForecastTimeStep: {
            /** @description Forecast for a specific time */
            data: components["schemas"]["Data"];
            /**
             * Time
             * @description The time these forecast values are valid for. Timestamp in format YYYY-MM-DDThh:mm:ssZ (ISO 8601)
             * @example 2019-12-03T14:00:00Z
             */
            time: string;
        };
        /** ForecastUnits */
        ForecastUnits: {
            /**
             * Air Pressure At Sea Level
             * @example hPa
             */
            air_pressure_at_sea_level?: string | null;
            /**
             * Air Temperature
             * @example C
             */
            air_temperature?: string | null;
            /**
             * Air Temperature Max
             * @example C
             */
            air_temperature_max?: string | null;
            /**
             * Air Temperature Min
             * @example C
             */
            air_temperature_min?: string | null;
            /**
             * Cloud Area Fraction
             * @example %
             */
            cloud_area_fraction?: string | null;
            /**
             * Cloud Area Fraction High
             * @example %
             */
            cloud_area_fraction_high?: string | null;
            /**
             * Cloud Area Fraction Low
             * @example %
             */
            cloud_area_fraction_low?: string | null;
            /**
             * Cloud Area Fraction Medium
             * @example %
             */
            cloud_area_fraction_medium?: string | null;
            /**
             * Dew Point Temperature
             * @example C
             */
            dew_point_temperature?: string | null;
            /**
             * Fog Area Fraction
             * @example %
             */
            fog_area_fraction?: string | null;
            /**
             * Precipitation Amount
             * @example mm
             */
            precipitation_amount?: string | null;
            /**
             * Precipitation Amount Max
             * @example mm
             */
            precipitation_amount_max?: string | null;
            /**
             * Precipitation Amount Min
             * @example mm
             */
            precipitation_amount_min?: string | null;
            /**
             * Probability Of Precipitation
             * @example %
             */
            probability_of_precipitation?: string | null;
            /**
             * Probability Of Thunder
             * @example %
             */
            probability_of_thunder?: string | null;
            /**
             * Relative Humidity
             * @example %
             */
            relative_humidity?: string | null;
            /**
             * Ultraviolet Index Clear Sky Max
             * @example 1
             */
            ultraviolet_index_clear_sky_max?: string | null;
            /**
             * Wind From Direction
             * @example degrees
             */
            wind_from_direction?: string | null;
            /**
             * Wind Speed
             * @example m/s
             */
            wind_speed?: string | null;
            /**
             * Wind Speed Of Gust
             * @example m/s
             */
            wind_speed_of_gust?: string | null;
        };
        /**
         * GeometryType
         * @constant
         * @enum {string}
         */
        GeometryType: "Point";
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** Instant */
        Instant: {
            details?: components["schemas"]["ForecastTimeInstant"] | null;
        };
        /** METJSONForecast */
        METJSONForecast: {
            geometry: components["schemas"]["weather_api__models__met__weather_types__PointGeometry"];
            properties: components["schemas"]["weather_api__models__met__weather_types__Forecast"];
            /**
             * @description The feature type of this geojson-object
             * @default Feature
             * @example Feature
             */
            type: components["schemas"]["FeatureType"];
        };
        /** METJSONSunrise */
        METJSONSunrise: {
            /** Copyright */
            copyright: string;
            /** Licenseurl */
            licenseURL: string;
            /** @example Feature */
            type: components["schemas"]["Type"];
            geometry: components["schemas"]["weather_api__models__met__sunrise_types__PointGeometry"];
            properties: components["schemas"]["weather_api__models__met__sunrise_types__Forecast"];
        };
        /** Meta */
        Meta: {
            units: components["schemas"]["ForecastUnits"];
            /**
             * Updated At
             * @description Update time for this forecast
             * @example 2019-12-03T13:52:13Z
             */
            updated_at: string;
        };
        /** Next12Hours */
        Next12Hours: {
            details: components["schemas"]["ForecastTimePeriod"];
            summary: components["schemas"]["ForecastSummary"];
        };
        /** Next1Hours */
        Next1Hours: {
            details: components["schemas"]["ForecastTimePeriod"];
            summary: components["schemas"]["ForecastSummary"];
        };
        /** Next6Hours */
        Next6Hours: {
            details: components["schemas"]["ForecastTimePeriod"];
            summary: components["schemas"]["ForecastSummary"];
        };
        /** SolarTime */
        SolarTime: {
            /**
             * Time
             * @example 2019-12-03T13:52:13Z
             */
            time: string;
        };
        /**
         * Type
         * @constant
         * @enum {string}
         */
        Type: "Feature";
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
        /**
         * WeatherSymbol
         * @enum {string}
         */
        WeatherSymbol: "clearsky_day" | "clearsky_night" | "clearsky_polartwilight" | "fair_day" | "fair_night" | "fair_polartwilight" | "lightssnowshowersandthunder_day" | "lightssnowshowersandthunder_night" | "lightssnowshowersandthunder_polartwilight" | "lightsnowshowers_day" | "lightsnowshowers_night" | "lightsnowshowers_polartwilight" | "heavyrainandthunder" | "heavysnowandthunder" | "rainandthunder" | "heavysleetshowersandthunder_day" | "heavysleetshowersandthunder_night" | "heavysleetshowersandthunder_polartwilight" | "heavysnow" | "heavyrainshowers_day" | "heavyrainshowers_night" | "heavyrainshowers_polartwilight" | "lightsleet" | "heavyrain" | "lightrainshowers_day" | "lightrainshowers_night" | "lightrainshowers_polartwilight" | "heavysleetshowers_day" | "heavysleetshowers_night" | "heavysleetshowers_polartwilight" | "lightsleetshowers_day" | "lightsleetshowers_night" | "lightsleetshowers_polartwilight" | "snow" | "heavyrainshowersandthunder_day" | "heavyrainshowersandthunder_night" | "heavyrainshowersandthunder_polartwilight" | "snowshowers_day" | "snowshowers_night" | "snowshowers_polartwilight" | "fog" | "snowshowersandthunder_day" | "snowshowersandthunder_night" | "snowshowersandthunder_polartwilight" | "lightsnowandthunder" | "heavysleetandthunder" | "lightrain" | "rainshowersandthunder_day" | "rainshowersandthunder_night" | "rainshowersandthunder_polartwilight" | "rain" | "lightsnow" | "lightrainshowersandthunder_day" | "lightrainshowersandthunder_night" | "lightrainshowersandthunder_polartwilight" | "heavysleet" | "sleetandthunder" | "lightrainandthunder" | "sleet" | "lightssleetshowersandthunder_day" | "lightssleetshowersandthunder_night" | "lightssleetshowersandthunder_polartwilight" | "lightsleetandthunder" | "partlycloudy_day" | "partlycloudy_night" | "partlycloudy_polartwilight" | "sleetshowersandthunder_day" | "sleetshowersandthunder_night" | "sleetshowersandthunder_polartwilight" | "rainshowers_day" | "rainshowers_night" | "rainshowers_polartwilight" | "snowandthunder" | "sleetshowers_day" | "sleetshowers_night" | "sleetshowers_polartwilight" | "cloudy" | "heavysnowshowersandthunder_day" | "heavysnowshowersandthunder_night" | "heavysnowshowersandthunder_polartwilight" | "heavysnowshowers_day" | "heavysnowshowers_night" | "heavysnowshowers_polartwilight";
        /** Forecast */
        weather_api__models__met__sunrise_types__Forecast: {
            /** Body */
            body: string;
            sunrise: components["schemas"]["SolarTime"];
            sunset: components["schemas"]["SolarTime"];
        };
        /** PointGeometry */
        weather_api__models__met__sunrise_types__PointGeometry: {
            /**
             * Coordinates
             * @example [
             *       60.5,
             *       11.59,
             *       1001
             *     ]
             */
            coordinates: number[];
            type: components["schemas"]["GeometryType"];
        };
        /** Forecast */
        weather_api__models__met__weather_types__Forecast: {
            meta: components["schemas"]["Meta"];
            /** Timeseries */
            timeseries: components["schemas"]["ForecastTimeStep"][];
        };
        /** PointGeometry */
        weather_api__models__met__weather_types__PointGeometry: {
            /**
             * Coordinates
             * @description [longitude, latitude, altitude]. All numbers in decimal.
             * @example [
             *       60.5,
             *       11.59,
             *       1001
             *     ]
             */
            coordinates: number[];
            type: components["schemas"]["GeometryType"];
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_forecast_locationforecast_get: {
        parameters: {
            query: {
                /**
                 * @description Latitude
                 * @example 60.1
                 */
                lat: number;
                /**
                 * @description Longitude
                 * @example 9.58
                 */
                lon: number;
                /**
                 * @description Altitude above sea level in meters.
                 * @example 100
                 */
                altitude?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["METJSONForecast"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_sunrise_sunrise_get: {
        parameters: {
            query: {
                /**
                 * @description Latitude
                 * @example 60.1
                 */
                lat: number;
                /**
                 * @description Longitude
                 * @example 9.58
                 */
                lon: number;
                /**
                 * @description Date
                 * @example 2021-10-10
                 */
                date?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["METJSONSunrise"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    liveness_health_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string | undefined;
                    };
                };
            };
        };
    };
    ready_ready_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
}
