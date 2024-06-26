#!/bin/sh
openapi-typescript https://api-test.openepi.io/geocoding/openapi.json --output generated/geocoding.ts
openapi-typescript https://api-test.openepi.io/weather/openapi.json --output generated/weather.ts
openapi-typescript https://api-test.openepi.io/flood/openapi.json --output generated/flood.ts
openapi-typescript https://api-test.openepi.io/deforestation/openapi.json --output generated/deforestation.ts
openapi-typescript https://api-test.openepi.io/soil/openapi.json --output generated/soil.ts
openapi-typescript https://api-test.openepi.io/crop-health/openapi.json --output generated/crop_health.ts

# Replace '"*/*": string;' with '"*/*": Buffer;'"
if [ "$(uname)" = "Darwin" ]; then
    sed -i '' "s/\"\*\/\*\": string;/\"\*\/\*\": Buffer;/g" ./generated/crop_health.ts
else
    sed -i "s/\"\*\/\*\": string;/\"\*\/\*\": Buffer;/g" ./generated/crop_health.ts
fi