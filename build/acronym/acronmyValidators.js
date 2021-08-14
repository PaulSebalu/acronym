"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.editAcronymSchema = exports.createAcronymSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

var createAcronymSchema = _joi["default"].object({
  acronym: _joi["default"].string().required(),
  definition: _joi["default"].string().required()
});

exports.createAcronymSchema = createAcronymSchema;

var editAcronymSchema = _joi["default"].object({
  acronym: _joi["default"].string(),
  definition: _joi["default"].string()
});

exports.editAcronymSchema = editAcronymSchema;