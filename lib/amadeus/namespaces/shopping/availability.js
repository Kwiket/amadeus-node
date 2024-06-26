"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_availabilities = _interopRequireDefault(require("./availability/flight_availabilities"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/shopping/availability` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.availability;
 * ```
 *
 * @param {Client} client
 * @property {Availability} availability
 * @protected
 */
var Availability = /*#__PURE__*/_createClass(function Availability(client) {
  _classCallCheck(this, Availability);
  this.client = client;
  this.flightAvailabilities = new _flight_availabilities["default"](client);
});
var _default = exports["default"] = Availability;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2F2YWlsYWJpbGl0aWVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwidCIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJyIiwiZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQXZhaWxhYmlsaXR5IiwiY2xpZW50IiwiZmxpZ2h0QXZhaWxhYmlsaXRpZXMiLCJGbGlnaHRBdmFpbGFiaWxpdGllcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2F2YWlsYWJpbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxpZ2h0QXZhaWxhYmlsaXRpZXMgZnJvbSAnLi9hdmFpbGFiaWxpdHkvZmxpZ2h0X2F2YWlsYWJpbGl0aWVzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5YCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuYXZhaWxhYmlsaXR5O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtBdmFpbGFiaWxpdHl9IGF2YWlsYWJpbGl0eVxuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBBdmFpbGFiaWxpdHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmZsaWdodEF2YWlsYWJpbGl0aWVzID0gbmV3IEZsaWdodEF2YWlsYWJpbGl0aWVzKGNsaWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhaWxhYmlsaXR5O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsc0JBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUF3RSxTQUFBRCx1QkFBQUUsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFmLGlCQUFBLENBQUFjLFdBQUEsQ0FBQUcsU0FBQSxFQUFBRixVQUFBLE9BQUFDLFdBQUEsRUFBQWhCLGlCQUFBLENBQUFjLFdBQUEsRUFBQUUsV0FBQSxHQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUksV0FBQSxpQkFBQU4sUUFBQSxtQkFBQU0sV0FBQTtBQUFBLFNBQUFILGVBQUFPLENBQUEsUUFBQWYsQ0FBQSxHQUFBZ0IsWUFBQSxDQUFBRCxDQUFBLGdDQUFBRSxPQUFBLENBQUFqQixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFnQixhQUFBRCxDQUFBLEVBQUFHLENBQUEsb0JBQUFELE9BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUksQ0FBQSxHQUFBSixDQUFBLENBQUFLLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQUYsQ0FBQSxRQUFBbkIsQ0FBQSxHQUFBbUIsQ0FBQSxDQUFBRyxJQUFBLENBQUFQLENBQUEsRUFBQUcsQ0FBQSxnQ0FBQUQsT0FBQSxDQUFBakIsQ0FBQSxVQUFBQSxDQUFBLFlBQUF1QixTQUFBLHlFQUFBTCxDQUFBLEdBQUFNLE1BQUEsR0FBQUMsTUFBQSxFQUFBVixDQUFBO0FBQUEsU0FBQVcsZ0JBQUFDLFFBQUEsRUFBQWhCLFdBQUEsVUFBQWdCLFFBQUEsWUFBQWhCLFdBQUEsZUFBQVksU0FBQTtBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQSxJQWVNSyxZQUFZLGdCQUFBbEIsWUFBQSxDQUNoQixTQUFBa0IsYUFBWUMsTUFBTSxFQUFFO0VBQUFILGVBQUEsT0FBQUUsWUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLG9CQUFvQixHQUFHLElBQUlDLGlDQUFvQixDQUFDRixNQUFNLENBQUM7QUFDOUQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxZQUFZO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=