"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _traveled = _interopRequireDefault(require("./air_traffic/traveled.js"));
var _booked = _interopRequireDefault(require("./air_traffic/booked.js"));
var _busiest_period = _interopRequireDefault(require("./air_traffic/busiest_period.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.airTraffic;
 * ```
 *
 * @param {Client} client
 */
var AirTraffic = /*#__PURE__*/_createClass(function AirTraffic(client) {
  _classCallCheck(this, AirTraffic);
  this.client = client;
  this.traveled = new _traveled["default"](client);
  this.booked = new _booked["default"](client);
  this.busiestPeriod = new _busiest_period["default"](client);
});
var _default = exports["default"] = AirTraffic;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhdmVsZWQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ib29rZWQiLCJfYnVzaWVzdF9wZXJpb2QiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwidCIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJyIiwiZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQWlyVHJhZmZpYyIsImNsaWVudCIsInRyYXZlbGVkIiwiVHJhdmVsZWQiLCJib29rZWQiLCJCb29rZWQiLCJidXNpZXN0UGVyaW9kIiwiQnVzaWVzdFBlcmlvZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3RyYXZlbC9hbmFseXRpY3MvYWlyX3RyYWZmaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYXZlbGVkIGZyb20gJy4vYWlyX3RyYWZmaWMvdHJhdmVsZWQuanMnO1xuaW1wb3J0IEJvb2tlZCBmcm9tICcuL2Fpcl90cmFmZmljL2Jvb2tlZC5qcyc7XG5pbXBvcnQgQnVzaWVzdFBlcmlvZCBmcm9tICcuL2Fpcl90cmFmZmljL2J1c2llc3RfcGVyaW9kLmpzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvdHJhdmVsL2FuYWx5dGljcy9haXItdHJhZmZpY2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnRyYXZlbC5hbmFseXRpY3MuYWlyVHJhZmZpYztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQWlyVHJhZmZpYyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgPSBjbGllbnQ7XG4gICAgdGhpcy50cmF2ZWxlZCA9IG5ldyBUcmF2ZWxlZChjbGllbnQpO1xuICAgIHRoaXMuYm9va2VkID0gbmV3IEJvb2tlZChjbGllbnQpO1xuICAgIHRoaXMuYnVzaWVzdFBlcmlvZCA9IG5ldyBCdXNpZXN0UGVyaW9kKGNsaWVudCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBaXJUcmFmZmljO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsT0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsZUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQTRELFNBQUFELHVCQUFBSSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxrQkFBQUMsTUFBQSxFQUFBQyxLQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxLQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxVQUFBLEdBQUFILEtBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxVQUFBLENBQUFDLFVBQUEsR0FBQUQsVUFBQSxDQUFBQyxVQUFBLFdBQUFELFVBQUEsQ0FBQUUsWUFBQSx3QkFBQUYsVUFBQSxFQUFBQSxVQUFBLENBQUFHLFFBQUEsU0FBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFULE1BQUEsRUFBQVUsY0FBQSxDQUFBTixVQUFBLENBQUFPLEdBQUEsR0FBQVAsVUFBQTtBQUFBLFNBQUFRLGFBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQWYsaUJBQUEsQ0FBQWMsV0FBQSxDQUFBRyxTQUFBLEVBQUFGLFVBQUEsT0FBQUMsV0FBQSxFQUFBaEIsaUJBQUEsQ0FBQWMsV0FBQSxFQUFBRSxXQUFBLEdBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSSxXQUFBLGlCQUFBTixRQUFBLG1CQUFBTSxXQUFBO0FBQUEsU0FBQUgsZUFBQU8sQ0FBQSxRQUFBZixDQUFBLEdBQUFnQixZQUFBLENBQUFELENBQUEsZ0NBQUFFLE9BQUEsQ0FBQWpCLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQWdCLGFBQUFELENBQUEsRUFBQUcsQ0FBQSxvQkFBQUQsT0FBQSxDQUFBRixDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSSxDQUFBLEdBQUFKLENBQUEsQ0FBQUssTUFBQSxDQUFBQyxXQUFBLGtCQUFBRixDQUFBLFFBQUFuQixDQUFBLEdBQUFtQixDQUFBLENBQUFHLElBQUEsQ0FBQVAsQ0FBQSxFQUFBRyxDQUFBLGdDQUFBRCxPQUFBLENBQUFqQixDQUFBLFVBQUFBLENBQUEsWUFBQXVCLFNBQUEseUVBQUFMLENBQUEsR0FBQU0sTUFBQSxHQUFBQyxNQUFBLEVBQUFWLENBQUE7QUFBQSxTQUFBVyxnQkFBQUMsUUFBQSxFQUFBaEIsV0FBQSxVQUFBZ0IsUUFBQSxZQUFBaEIsV0FBQSxlQUFBWSxTQUFBO0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUssVUFBVSxnQkFBQWxCLFlBQUEsQ0FDZCxTQUFBa0IsV0FBWUMsTUFBTSxFQUFFO0VBQUFILGVBQUEsT0FBQUUsVUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBS0EsTUFBTTtFQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxvQkFBUSxDQUFDRixNQUFNLENBQUM7RUFDcEMsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUMsa0JBQU0sQ0FBQ0osTUFBTSxDQUFDO0VBQ2hDLElBQUksQ0FBQ0ssYUFBYSxHQUFHLElBQUlDLDBCQUFhLENBQUNOLE1BQU0sQ0FBQztBQUNoRCxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBSVlULFVBQVU7QUFBQVUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==