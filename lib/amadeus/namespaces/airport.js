"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _directDestinations = _interopRequireDefault(require("./airport/direct-destinations"));
var _predictions = _interopRequireDefault(require("./airport/predictions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/airport` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport;
 * ```
 *
 * @param {Client} client
 * @property {predictions} predictions
 */
var Airport = /*#__PURE__*/_createClass(function Airport(client) {
  _classCallCheck(this, Airport);
  this.client = client;
  this.directDestinations = new _directDestinations["default"](client);
  this.predictions = new _predictions["default"](client);
});
var _default = exports["default"] = Airport;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGlyZWN0RGVzdGluYXRpb25zIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJlZGljdGlvbnMiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwidCIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJyIiwiZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQWlycG9ydCIsImNsaWVudCIsImRpcmVjdERlc3RpbmF0aW9ucyIsIkRpcmVjdERlc3RpbmF0aW9ucyIsInByZWRpY3Rpb25zIiwiUHJlZGljdGlvbnMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9haXJwb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaXJlY3REZXN0aW5hdGlvbnMgZnJvbSAnLi9haXJwb3J0L2RpcmVjdC1kZXN0aW5hdGlvbnMnO1xuaW1wb3J0IFByZWRpY3Rpb25zICAgIGZyb20gJy4vYWlycG9ydC9wcmVkaWN0aW9ucyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL2FpcnBvcnRgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5haXJwb3J0O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtwcmVkaWN0aW9uc30gcHJlZGljdGlvbnNcbiAqL1xuY2xhc3MgQWlycG9ydCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgICAgICAgICAgID0gY2xpZW50O1xuICAgIHRoaXMuZGlyZWN0RGVzdGluYXRpb25zID0gbmV3IERpcmVjdERlc3RpbmF0aW9ucyhjbGllbnQpO1xuICAgIHRoaXMucHJlZGljdGlvbnMgPSBuZXcgUHJlZGljdGlvbnMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBaXJwb3J0OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLG1CQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFBbUQsU0FBQUQsdUJBQUFHLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZixpQkFBQSxDQUFBYyxXQUFBLENBQUFHLFNBQUEsRUFBQUYsVUFBQSxPQUFBQyxXQUFBLEVBQUFoQixpQkFBQSxDQUFBYyxXQUFBLEVBQUFFLFdBQUEsR0FBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFJLFdBQUEsaUJBQUFOLFFBQUEsbUJBQUFNLFdBQUE7QUFBQSxTQUFBSCxlQUFBTyxDQUFBLFFBQUFmLENBQUEsR0FBQWdCLFlBQUEsQ0FBQUQsQ0FBQSxnQ0FBQUUsT0FBQSxDQUFBakIsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBZ0IsYUFBQUQsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBRCxPQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFJLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxNQUFBLENBQUFDLFdBQUEsa0JBQUFGLENBQUEsUUFBQW5CLENBQUEsR0FBQW1CLENBQUEsQ0FBQUcsSUFBQSxDQUFBUCxDQUFBLEVBQUFHLENBQUEsZ0NBQUFELE9BQUEsQ0FBQWpCLENBQUEsVUFBQUEsQ0FBQSxZQUFBdUIsU0FBQSx5RUFBQUwsQ0FBQSxHQUFBTSxNQUFBLEdBQUFDLE1BQUEsRUFBQVYsQ0FBQTtBQUFBLFNBQUFXLGdCQUFBQyxRQUFBLEVBQUFoQixXQUFBLFVBQUFnQixRQUFBLFlBQUFoQixXQUFBLGVBQUFZLFNBQUE7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLElBY01LLE9BQU8sZ0JBQUFsQixZQUFBLENBQ1gsU0FBQWtCLFFBQVlDLE1BQU0sRUFBRTtFQUFBSCxlQUFBLE9BQUFFLE9BQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxJQUFJQyw4QkFBa0IsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3hELElBQUksQ0FBQ0csV0FBVyxHQUFHLElBQUlDLHVCQUFXLENBQUNKLE1BQU0sQ0FBQztBQUM1QyxDQUFDO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1lQLE9BQU87QUFBQVEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==