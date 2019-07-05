"use strict";

var aws4 = require("./aws4");
var axios = require("axios");
var AWS = require("aws-sdk");
var url = require("url");

// Examnple config
// var config = {
//   endpoint: "https://example.com/v1/subscription",
//   method: "POST",
//   data: { name: "Tam Nguyen", blog: "https://ntam.me" },
//   accessKeyId: "",
//   secretAccessKey: "",
//   sessionToken: ""
// }

function fetchApiSigv4(config) {
  var data = config["data"];
  var endpointURL = url.parse(config["endpoint"]);
  var method = config["method"];
  var accessKeyId = config["accessKeyId"];
  var secretAccessKey = config["secretAccessKey"];
  var sessionToken = config["sessionToken"];

  let request = {
    host: endpointURL.host,
    method: method,
    url: endpointURL.href,
    data: data,
    body: JSON.stringify(data),
    path: endpointURL.path,
    headers: {
      "content-type": "application/json"
    }
  };

  let signedRequest = aws4.sign(request, {
    // assumes user has authenticated and we have called
    // AWS.config.credentials.get to retrieve keys and
    // session tokens
    secretAccessKey: secretAccessKey || AWS.config.credentials.secretAccessKey,
    accessKeyId: accessKeyId || AWS.config.credentials.accessKeyId,
    sessionToken: sessionToken || AWS.config.credentials.sessionToken
  });

  delete signedRequest.headers["Host"];
  delete signedRequest.headers["Content-Length"];

  let response = await axios(signedRequest);
  return response;
}

module.exports = fetchApiSigv4;
