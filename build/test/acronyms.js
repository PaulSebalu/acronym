"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chai = _interopRequireWildcard(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

var _utils = require("../core/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable func-names */

/* eslint-disable prefer-arrow-callback */

/* eslint-disable no-undef */

/* eslint-disable import/no-extraneous-dependencies */
_chai["default"].use(_chaiHttp["default"]);

var acronymId;

var token = _utils.Token.createToken('randomText');

var acronym = {
  acronym: 'API',
  definition: 'Application Programming Interface'
};
var updateAcronym = {
  acronym: 'DOM',
  definition: 'Document Object Model'
};
describe('acronyms list endpoint', function () {
  it('endpoint should respond with a 206 http status code and queryset', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _chai["default"].request(_index["default"]).get('/acronym').then(function (res) {
              (0, _chai.expect)(res).to.have.status(206);
              (0, _chai.expect)(res.body).to.be.a('array');
              if (error) done(error);
              done();
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});
describe('acronym creation endpoint', function () {
  it('endpoint should create a new acronym', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _chai["default"].request(_index["default"]).post('/acronym').set('Authorization', "Bearer ".concat(token)).send(acronym).then(function (res) {
              acronymId = res.body.id;
              (0, _chai.expect)(res).to.have.status(201);
              (0, _chai.expect)(res.body).to.be.a('array');
              (0, _chai.expect)(res.body.acronym).to.be.equal("".concat(acronym.acronym));
              (0, _chai.expect)(res.body.definition).to.be.equal("".concat(acronym.definition));
              if (error) done(error);
              done();
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
});
describe('acronym update endpoint', function () {
  it('endpoint should update a specified acronym', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _chai["default"].request(_index["default"]).post("/acronym/".concat(acronymId)).set('Authorization', "Bearer ".concat(token)).send(acronym).then(function (res) {
              (0, _chai.expect)(res).to.have.status(201);
              (0, _chai.expect)(res.body).to.be.a('array');
              (0, _chai.expect)(res.body.acronym).to.be.equal("".concat(updateAcronym.acronym));
              (0, _chai.expect)(res.body.definition).to.be.equal("".concat(updateAcronym.definition));
              if (error) done(error);
              done();
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })));
});
describe('acronym deletion endpoint', function () {
  it('endpoint should delete a specified acronym', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _chai["default"].request(_index["default"]).post("/acronym/".concat(acronymId)).set('Authorization', "Bearer ".concat(token)).send(acronym).then(function (res) {
              (0, _chai.expect)(res).to.have.status(200);
              if (error) done(error);
              done();
            });

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
});