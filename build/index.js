"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _pino = _interopRequireDefault(require("pino"));

var _expressPinoLogger = _interopRequireDefault(require("express-pino-logger"));

var _acronymRoute = _interopRequireDefault(require("./acronym/acronymRoute"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var logger = (0, _pino["default"])({
  level: process.env.LOG_LEVEL || 'info'
});
var expressLogger = (0, _expressPinoLogger["default"])({
  logger: logger
});

_dotenv["default"].config();

var app = (0, _express["default"])();
app.use((0, _cors["default"])(), (0, _express.json)(), (0, _express.urlencoded)({
  extended: true
}), expressLogger);
app.use(_acronymRoute["default"]);
app.get('/', function (req, res) {
  res.send({
    status: 200,
    message: 'World Texting Foundation, REST API'
  });
});
app.use('*', function (req, res) {
  return res.status(405).json({
    status: 405,
    message: 'You need to be a little more specific...'
  });
});
var PORT;

if (process.env.NODE_ENV === 'test') {
  PORT = 3000;
} else {
  PORT = process.env.PORT || 4000;
}

app.listen(PORT, function () {
  logger.info("Server started on port ".concat(PORT, "..."));
});
var _default = app;
exports["default"] = _default;