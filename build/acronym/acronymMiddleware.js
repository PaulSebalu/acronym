"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acronymExists = exports.validateAcronym = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _acronmyValidators = require("./acronmyValidators");

var _utils = require("../core/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var validateAcronym = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.t0 = req.method;
            _context.next = _context.t0 === 'POST' ? 4 : _context.t0 === 'PUT' ? 7 : 10;
            break;

          case 4:
            _context.next = 6;
            return _acronmyValidators.createAcronymSchema.validateAsync(_objectSpread({}, req.body));

          case 6:
            return _context.abrupt("break", 10);

          case 7:
            _context.next = 9;
            return _acronmyValidators.editAcronymSchema.validateAsync(_objectSpread({}, req.body));

          case 9:
            return _context.abrupt("break", 10);

          case 10:
            next();
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t1 = _context["catch"](0);
            return _context.abrupt("return", res.status(400).json(_context.t1.message.replace(/"/g, '')));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function validateAcronym(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.validateAcronym = validateAcronym;

var acronymExists = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var sql, _yield$query, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            sql = "SELECT * FROM acronyms where id = $1";
            _context2.next = 4;
            return (0, _utils.query)(sql, [req.params.acronym]);

          case 4:
            _yield$query = _context2.sent;
            rows = _yield$query.rows;

            if (!(rows.length === 0)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt("return", res.status(404).json({
              status: 404,
              message: 'Acronym does not exist'
            }));

          case 8:
            // eslint-disable-next-line prefer-destructuring
            req.acronym = rows[0];
            next();
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function acronymExists(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.acronymExists = acronymExists;