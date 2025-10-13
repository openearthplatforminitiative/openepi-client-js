#!/bin/sh
openapi-typescript https://api.openepi.io/geocoding/openapi.json --output generated/geocoding.ts

# met.no APIs only provide Swagger 2.0 specs, which are not supported by openapi-typescript v7+
# Must use openapi-typescript@5 for Swagger 2.0 support
npx openapi-typescript@5 https://api.met.no/weatherapi/locationforecast/2.0/swagger --output generated/weather.ts
npx openapi-typescript@5 https://api.met.no/weatherapi/sunrise/3.0/swagger --output generated/sunrise.ts

openapi-typescript https://api.openepi.io/flood/openapi.json --output generated/flood.ts
openapi-typescript https://api.openepi.io/deforestation/openapi.json --output generated/deforestation.ts
openapi-typescript https://api.openepi.io/soil/openapi.json --output generated/soil.ts
openapi-typescript https://api.openepi.io/crop-health/openapi.json --output generated/crop_health.ts


# When generating types from the openapi spec, it makes the requestBody image-type "string".
# However, when sending an image in javascript we want to send the raw data, which then means
# that we should use the type "Buffer". The following sed command changes that in the generated file. 
# Sed works differently on mac and non-mac machines, which is why we have an if statement.
# Replace '"*/*": string;' with '"*/*": Buffer;'"
if [ "$(uname)" = "Darwin" ]; then
    sed -i '' "s/\"\*\/\*\": string;/\"\*\/\*\": Buffer;/g" ./generated/crop_health.ts
else
    sed -i "s/\"\*\/\*\": string;/\"\*\/\*\": Buffer;/g" ./generated/crop_health.ts
fi