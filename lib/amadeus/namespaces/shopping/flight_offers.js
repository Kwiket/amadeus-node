"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_choice_prediction = _interopRequireDefault(require("./flight_offers/flight_choice_prediction.js"));
var _pricing = _interopRequireDefault(require("./flight_offers/pricing.js"));
var _upselling = _interopRequireDefault(require("./flight_offers/upselling.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */
var FlightOffers = /*#__PURE__*/_createClass(function FlightOffers(client) {
  _classCallCheck(this, FlightOffers);
  this.client = client;
  this.prediction = new _flight_choice_prediction["default"](client);
  this.pricing = new _pricing["default"](client);
  this.upselling = new _upselling["default"](client);
});
var _default = exports["default"] = FlightOffers;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2Nob2ljZV9wcmVkaWN0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJpY2luZyIsIl91cHNlbGxpbmciLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwidCIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJyIiwiZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiRmxpZ2h0T2ZmZXJzIiwiY2xpZW50IiwicHJlZGljdGlvbiIsIkZsaWdodENob2ljZVByZWRpY3Rpb24iLCJwcmljaW5nIiwiUHJpY2luZyIsInVwc2VsbGluZyIsIlVwc2VsbGluZyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2ZsaWdodF9vZmZlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZsaWdodENob2ljZVByZWRpY3Rpb24gZnJvbSAnLi9mbGlnaHRfb2ZmZXJzL2ZsaWdodF9jaG9pY2VfcHJlZGljdGlvbi5qcyc7XG5pbXBvcnQgUHJpY2luZyBmcm9tICcuL2ZsaWdodF9vZmZlcnMvcHJpY2luZy5qcyc7XG5pbXBvcnQgVXBzZWxsaW5nIGZyb20gJy4vZmxpZ2h0X29mZmVycy91cHNlbGxpbmcuanMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRPZmZlcnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnByZWRpY3Rpb24gPSBuZXcgRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbihjbGllbnQpO1xuICAgIHRoaXMucHJpY2luZyA9IG5ldyBQcmljaW5nKGNsaWVudCk7XG4gICAgdGhpcy51cHNlbGxpbmcgPSBuZXcgVXBzZWxsaW5nKGNsaWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T2ZmZXJzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEseUJBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFVBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUFxRCxTQUFBRCx1QkFBQUksR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFmLGlCQUFBLENBQUFjLFdBQUEsQ0FBQUcsU0FBQSxFQUFBRixVQUFBLE9BQUFDLFdBQUEsRUFBQWhCLGlCQUFBLENBQUFjLFdBQUEsRUFBQUUsV0FBQSxHQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUksV0FBQSxpQkFBQU4sUUFBQSxtQkFBQU0sV0FBQTtBQUFBLFNBQUFILGVBQUFPLENBQUEsUUFBQWYsQ0FBQSxHQUFBZ0IsWUFBQSxDQUFBRCxDQUFBLGdDQUFBRSxPQUFBLENBQUFqQixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFnQixhQUFBRCxDQUFBLEVBQUFHLENBQUEsb0JBQUFELE9BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUksQ0FBQSxHQUFBSixDQUFBLENBQUFLLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQUYsQ0FBQSxRQUFBbkIsQ0FBQSxHQUFBbUIsQ0FBQSxDQUFBRyxJQUFBLENBQUFQLENBQUEsRUFBQUcsQ0FBQSxnQ0FBQUQsT0FBQSxDQUFBakIsQ0FBQSxVQUFBQSxDQUFBLFlBQUF1QixTQUFBLHlFQUFBTCxDQUFBLEdBQUFNLE1BQUEsR0FBQUMsTUFBQSxFQUFBVixDQUFBO0FBQUEsU0FBQVcsZ0JBQUFDLFFBQUEsRUFBQWhCLFdBQUEsVUFBQWdCLFFBQUEsWUFBQWhCLFdBQUEsZUFBQVksU0FBQTtBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1LLFlBQVksZ0JBQUFsQixZQUFBLENBQ2hCLFNBQUFrQixhQUFZQyxNQUFNLEVBQUU7RUFBQUgsZUFBQSxPQUFBRSxZQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLG9DQUFzQixDQUFDRixNQUFNLENBQUM7RUFDcEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSUMsbUJBQU8sQ0FBQ0osTUFBTSxDQUFDO0VBQ2xDLElBQUksQ0FBQ0ssU0FBUyxHQUFHLElBQUlDLHFCQUFTLENBQUNOLE1BQU0sQ0FBQztBQUN4QyxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBR1lULFlBQVk7QUFBQVUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==