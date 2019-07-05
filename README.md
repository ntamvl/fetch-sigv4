# Fetch AWS API Gateway with Signature Version 4

It's easy to call AWS API Gateway use SigV4

## How to install
```
npm install api-fetch-with-aws-sigv4
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
