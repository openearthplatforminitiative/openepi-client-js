# openepi-client-js

JavaScript-clients with type declarations for accessing OpenEPI data and services.

## Generating types

You can generate types from open-api by running:

```
npm run generate-types
```

## Examples

### Geocoding

```javascript
import { GeocoderClient } from 'openepi-client';

const client = new GeocoderClient();

client.getGeocoding({ q: 'Berlin' }).then((result) => {
  const { data, error } = result;
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

### Weather API

```javascript
import { WeatherClient } from 'openepi-client';

const client = new WeatherClient();

client
  .getLocationForecast({ lon: 52.520008, lat: 13.404954 })
  .then((result) => {
    const { data, error } = result;
    if (error) {
      console.error(error);
    } else {
      console.log(data.properties.timeseries);
    }
  });
```

### Using custom base URL

```javascript
import { GeocoderClient } from 'openepi-client';

const client = new GeocoderClient('https://my-custom-openepi-url.org');

client.getGeocoding({ q: 'Berlin' }).then((result) => {
  const { data, error } = result;
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```
