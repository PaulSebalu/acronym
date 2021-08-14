"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAcronym = exports.updateAcronym = exports.createAcronym = exports.acronyms = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _utils = require("../core/utils");

var _acronymUtils = _interopRequireDefault(require("./acronymUtils"));

/* eslint-disable consistent-return */
var acronyms = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var sql, _yield$query, rows, resource, offset, limit, queryset, paginatedQueryset;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            sql = "SELECT * FROM acronyms";
            _context.next = 4;
            return (0, _utils.query)(sql, [], res);

          case 4:
            _yield$query = _context.sent;
            rows = _yield$query.rows;
            resource = req.path.split('/')[1];
            offset = parseInt(req.query.from, 10) || 1;
            limit = parseInt(req.query.limit, 10) || 10;

            if (!(limit > 100 || limit < 1)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              status: 400,
              message: 'Requested limit not allowed'
            }));

          case 11:
            queryset = rows.slice(offset - 1);
            paginatedQueryset = queryset.slice(0, limit);
            if (req.query.search) paginatedQueryset = (0, _acronymUtils["default"])(req.query.search, queryset).slice(0, limit);
            return _context.abrupt("return", res.header('Access-Control-Expose-Headers', 'Content-Range').header('Access-Control-Expose-Headers', 'Accept-Range').header('Content-Range', "".concat(offset - 1, "-").concat(offset - 1 + limit - 1, "/").concat(rows.length)).header('Accept-Range', "".concat(resource, " 100")).status(206).json(paginatedQueryset));

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function acronyms(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.acronyms = acronyms;

var createAcronym = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, acronym, definition, sql, _yield$query2, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, acronym = _req$body.acronym, definition = _req$body.definition;
            sql = "INSERT INTO acronyms\n    (acronym, definition)\n    VALUES ($1, $2) RETURNING *";
            _context2.next = 5;
            return (0, _utils.query)(sql, [acronym.trim(), definition.trim()], res);

          case 5:
            _yield$query2 = _context2.sent;
            rows = _yield$query2.rows;

            if (!rows) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(201).json(rows));

          case 9:
            _context2.next = 14;
            break;

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500));

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function createAcronym(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createAcronym = createAcronym;

var updateAcronym = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, acronym, definition, sql, _yield$query3, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body2 = req.body, acronym = _req$body2.acronym, definition = _req$body2.definition;
            sql = "UPDATE acronyms \n      SET acronym = $1, definition = $2 WHERE id = $3 RETURNING *";
            _context3.next = 5;
            return (0, _utils.query)(sql, [acronym && acronym.trim() || req.acronym.acronym, definition && definition.trim() || req.acronym.definition, req.params.acronym], res);

          case 5:
            _yield$query3 = _context3.sent;
            rows = _yield$query3.rows;

            if (!rows) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", res.json(rows));

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500));

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function updateAcronym(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateAcronym = updateAcronym;

var deleteAcronym = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var sql;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            sql = "DELETE FROM acronyms WHERE id=$1";
            _context4.next = 4;
            return (0, _utils.query)(sql, [req.params.acronym], res);

          case 4:
            return _context4.abrupt("return", res.status(200).json("The acronym, ".concat(req.acronym.acronym, ", has been deleted")));

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.status(500));

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function deleteAcronym(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteAcronym = deleteAcronym;