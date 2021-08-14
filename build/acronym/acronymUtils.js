"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var matchStr = function matchStr(str, queryset) {
  var queryStr = str.replace(/ +(?= )/g, '');
  var regEx = new RegExp(queryStr, 'gi');
  var matches = [];
  queryset.forEach(function (acronym) {
    if (acronym.acronym.match(regEx) || acronym.definition.match(regEx)) matches.push(acronym);
  });
  return matches;
};

var _default = matchStr;
exports["default"] = _default;