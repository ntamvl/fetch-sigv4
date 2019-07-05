# Fetch AWS API Gateway with Signature Version 4

It's easy to call AWS API Gateway use SigV4

## How to install
```
npm install fetch-sigv4 --save
```

OR

```
yarn add fetch-sigv4
```

## Configuration Options
- `endpoint`: required, your api gateway endpoint
- `method`: required, should be POST | GET | PUT | OPTIONS
- `data`: required for method POST | PUT, your object data to send to the api
- `accessKeyId`: optional, default use AWS.config.credentials
- `secretAccessKey`: optional, default use AWS.config.credentials
- `sessionToken`: optional, default use AWS.config.credentials

Configuration object:
```
var config = {
  endpoint: "required --> your api gateway endpoint",
  method: "POST | GET | PUT | OPTIONS",
  data: [your object data to send to the api],
  accessKeyId: "[your aws accessKeyId, default use AWS.config.credentials]",
  secretAccessKey: "[your aws secretAccessKey, default use AWS.config.credentials]",
  sessionToken: "[your aws sessionToken, default use AWS.config.credentials]"
}
```

## Example:
```javascript
var fetchApiSigv4 = require("fetch-sigv4")

var config = {
    endpoint: "https://[your-api-id].execute-api.[region].amazonaws.com/[stage]/v1/authors",
    method: "POST",
    data: {
        name: "Tam Nguyen",
        country: "Viet Nam"
    }
}

const runDemo = async () => {
    console.log("Starting to run demo...");
    const response = await fetchApiSigv4(config);
    console.log("response: ", response);
}

runDemo();
```
