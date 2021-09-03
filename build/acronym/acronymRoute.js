"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _acronymController = require("./acronymController");

var _acronymMiddleware = require("./acronymMiddleware");

var acronymRouter = _express["default"].Router();

acronymRouter.get('/acronym', _acronymMiddleware.tokenProvided, _acronymMiddleware.verifyToken, _acronymController.acronyms);
acronymRouter.post('/acronym', _acronymMiddleware.tokenProvided, _acronymMiddleware.verifyToken, _acronymMiddleware.validateAcronym, _acronymMiddleware.validateAcronym, _acronymController.createAcronym);
acronymRouter.put('/acronym/:acronym', _acronymMiddleware.tokenProvided, _acronymMiddleware.verifyToken, _acronymMiddleware.acronymExists, _acronymMiddleware.validateAcronym, _acronymController.updateAcronym);
acronymRouter["delete"]('/acronym/:acronym', _acronymMiddleware.tokenProvided, _acronymMiddleware.verifyToken, _acronymMiddleware.acronymExists, _acronymController.deleteAcronym);
var _default = acronymRouter;
exports["default"] = _default;