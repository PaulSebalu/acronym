"use strict";

var _utils = require("./utils");

var devToken = function devToken() {
  var token = _utils.Token.createToken('development'); // eslint-disable-next-line no-console


  console.log("Use the token, ".concat(token, " to test the endpoints"));
};

devToken();