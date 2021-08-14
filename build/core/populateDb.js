"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _acronym = _interopRequireDefault(require("./acronym.json"));

var _utils = require("./utils");

var _pgErrorCodes = _interopRequireDefault(require("./pgErrorCodes"));

/* eslint-disable no-console */
var populateData = function populateData() {
  var count = 0;

  _acronym["default"].forEach(function (acronym) {
    var params = Object.entries(acronym).flat();
    var sql = "INSERT INTO acronyms\n    (acronym, definition) \n      VALUES ($1, $2) RETURNING *";

    _utils.pool.query(sql, params, function (err, res) {
      if (err) {
        var message = err.message.replace(/['"]+/g, '');
        var pgErrorCode = _pgErrorCodes["default"][err.code];
        throw new Error("".concat(message, "\npgErrorCode:").concat(pgErrorCode));
      }

      if (res.rows) {
        count += 1;
      }

      if (count === _acronym["default"].length) console.log("".concat(count, " acronyms added to the database"));
    });
  });
};

populateData();