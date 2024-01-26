# openepi-client-js

A JavaScript client with types declarations, for accessing OpenEPI data and services.

## Examples

### Using default API URL

```javascript
import { GeocoderClient } from "openepi-client";

const client = new GeocoderClient();

client.getGeocoding({ q: "Berlin" }).then((result) => {
  const { data, error } = result;
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```

### Using custom API URL

```javascript
import { GeocoderClient } from "openepi-client";

const client = new GeocoderClient("https://my-custom-openepi-url.com");

client.getGeocoding({ q: "Berlin" }).then((result) => {
  const { data, error } = result;
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
```
