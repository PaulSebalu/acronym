"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Token = exports.query = exports.pool = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _pgErrorCodes = _interopRequireDefault(require("./pgErrorCodes"));

_dotenv["default"].config(); // eslint-disable-next-line import/no-mutable-exports


var pool;
exports.pool = pool;

if (process.env.NODE_ENV === 'test') {
  exports.pool = pool = new _pg.Pool({
    connectionString: process.env.TEST_DATABASE_URL
  });
} else {
  exports.pool = pool = new _pg.Pool({
    connectionString: process.env.DATABASE_URL
  });
}

var query = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(sql, params, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!(params.length > 0)) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return pool.query(sql, params);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
            _context.next = 7;
            return pool.query(sql);

          case 7:
            return _context.abrupt("return", _context.sent);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t0.message.replace(/['"]+/g, ''),
              error: _pgErrorCodes["default"][_context.t0.code]
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function query(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.query = query;

var Token = /*#__PURE__*/function () {
  function Token() {
    (0, _classCallCheck2["default"])(this, Token);
  }

  (0, _createClass2["default"])(Token, null, [{
    key: "createToken",
    value: function createToken(payload) {
      var token = _jsonwebtoken["default"].sign(payload, process.env.secretkey);

      return token;
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      var payload = _jsonwebtoken["default"].verify(token, process.env.secretkey);

      return payload;
    }
  }]);
  return Token;
}();

exports.Token = Token;