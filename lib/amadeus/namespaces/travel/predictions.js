"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _trip_purpose = _interopRequireDefault(require("./predictions/trip_purpose"));
var _flight_delay = _interopRequireDefault(require("./predictions/flight_delay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions;
 * ```
 *
 * @param {Client} client
 * @property {TripPurpose} tripPurpose
 * @property {FlightDelay} flightDelay
 */
var Predictions = /*#__PURE__*/_createClass(function Predictions(client) {
  _classCallCheck(this, Predictions);
  this.client = client;
  this.tripPurpose = new _trip_purpose["default"](client);
  this.flightDelay = new _flight_delay["default"](client);
});
var _default = exports["default"] = Predictions;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJpcF9wdXJwb3NlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZmxpZ2h0X2RlbGF5Iiwib2JqIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJDb25zdHJ1Y3RvciIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInByb3RvdHlwZSIsInQiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiciIsImUiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlByZWRpY3Rpb25zIiwiY2xpZW50IiwidHJpcFB1cnBvc2UiLCJUcmlwUHVycG9zZSIsImZsaWdodERlbGF5IiwiRmxpZ2h0RGVsYXkiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy90cmF2ZWwvcHJlZGljdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyaXBQdXJwb3NlIGZyb20gJy4vcHJlZGljdGlvbnMvdHJpcF9wdXJwb3NlJztcbmltcG9ydCBGbGlnaHREZWxheSBmcm9tICcuL3ByZWRpY3Rpb25zL2ZsaWdodF9kZWxheSc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbC9wcmVkaWN0aW9ucy90cmlwLXB1cnBvc2VgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy50cmF2ZWwucHJlZGljdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge1RyaXBQdXJwb3NlfSB0cmlwUHVycG9zZVxuICogQHByb3BlcnR5IHtGbGlnaHREZWxheX0gZmxpZ2h0RGVsYXlcbiAqL1xuY2xhc3MgUHJlZGljdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnRyaXBQdXJwb3NlID0gbmV3IFRyaXBQdXJwb3NlKGNsaWVudCk7XG4gICAgdGhpcy5mbGlnaHREZWxheSA9IG5ldyBGbGlnaHREZWxheShjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWRpY3Rpb25zOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLGFBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLGFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUFxRCxTQUFBRCx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsa0JBQUFDLE1BQUEsRUFBQUMsS0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsS0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsVUFBQSxHQUFBSCxLQUFBLENBQUFDLENBQUEsR0FBQUUsVUFBQSxDQUFBQyxVQUFBLEdBQUFELFVBQUEsQ0FBQUMsVUFBQSxXQUFBRCxVQUFBLENBQUFFLFlBQUEsd0JBQUFGLFVBQUEsRUFBQUEsVUFBQSxDQUFBRyxRQUFBLFNBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBVCxNQUFBLEVBQUFVLGNBQUEsQ0FBQU4sVUFBQSxDQUFBTyxHQUFBLEdBQUFQLFVBQUE7QUFBQSxTQUFBUSxhQUFBQyxXQUFBLEVBQUFDLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFmLGlCQUFBLENBQUFjLFdBQUEsQ0FBQUcsU0FBQSxFQUFBRixVQUFBLE9BQUFDLFdBQUEsRUFBQWhCLGlCQUFBLENBQUFjLFdBQUEsRUFBQUUsV0FBQSxHQUFBUCxNQUFBLENBQUFDLGNBQUEsQ0FBQUksV0FBQSxpQkFBQU4sUUFBQSxtQkFBQU0sV0FBQTtBQUFBLFNBQUFILGVBQUFPLENBQUEsUUFBQWYsQ0FBQSxHQUFBZ0IsWUFBQSxDQUFBRCxDQUFBLGdDQUFBRSxPQUFBLENBQUFqQixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFnQixhQUFBRCxDQUFBLEVBQUFHLENBQUEsb0JBQUFELE9BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUksQ0FBQSxHQUFBSixDQUFBLENBQUFLLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQUYsQ0FBQSxRQUFBbkIsQ0FBQSxHQUFBbUIsQ0FBQSxDQUFBRyxJQUFBLENBQUFQLENBQUEsRUFBQUcsQ0FBQSxnQ0FBQUQsT0FBQSxDQUFBakIsQ0FBQSxVQUFBQSxDQUFBLFlBQUF1QixTQUFBLHlFQUFBTCxDQUFBLEdBQUFNLE1BQUEsR0FBQUMsTUFBQSxFQUFBVixDQUFBO0FBQUEsU0FBQVcsZ0JBQUFDLFFBQUEsRUFBQWhCLFdBQUEsVUFBQWdCLFFBQUEsWUFBQWhCLFdBQUEsZUFBQVksU0FBQTtBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQSxJQWVNSyxXQUFXLGdCQUFBbEIsWUFBQSxDQUNmLFNBQUFrQixZQUFZQyxNQUFNLEVBQUU7RUFBQUgsZUFBQSxPQUFBRSxXQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUlDLHdCQUFXLENBQUNGLE1BQU0sQ0FBQztFQUMxQyxJQUFJLENBQUNHLFdBQVcsR0FBRyxJQUFJQyx3QkFBVyxDQUFDSixNQUFNLENBQUM7QUFDNUMsQ0FBQztBQUFBLElBQUFLLFFBQUEsR0FBQUMsT0FBQSxjQUdZUCxXQUFXO0FBQUFRLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=