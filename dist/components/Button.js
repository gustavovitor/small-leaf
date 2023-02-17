"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _jsxRuntime = require("react/jsx-runtime");
function Button(_ref) {
  var type = _ref.type,
    text = _ref.text;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: type,
    className: "transition-colors transition-shadow inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    children: text
  });
}
var _default = Button;
exports.default = _default;