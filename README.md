# openepi-client-js
A JavaScript client with types declarations, for accessing OpenEPI data and services.

Example usage:

```javascript
import { GeocoderClient } from 'openepi-client'

const client = new GeocoderClient()

client.getGeocoding("Berlin").then(result => {
    const { data, error } = result
    if (error) {
        console.error(error)
    } else {
        console.log(data)
    }
})
```
