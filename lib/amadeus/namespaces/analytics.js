"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _itinerary_price_metrics = _interopRequireDefault(require("./analytics/itinerary_price_metrics"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */
var Analytics = /*#__PURE__*/_createClass(function Analytics(client) {
  _classCallCheck(this, Analytics);
  this.client = client;
  this.itineraryPriceMetrics = new _itinerary_price_metrics["default"](client);
});
var _default = exports["default"] = Analytics;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRpbmVyYXJ5X3ByaWNlX21ldHJpY3MiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJ0IiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsInIiLCJlIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJBbmFseXRpY3MiLCJjbGllbnQiLCJpdGluZXJhcnlQcmljZU1ldHJpY3MiLCJJdGluZXJhcnlQcmljZU1ldHJpY3MiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9hbmFseXRpY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0aW5lcmFyeVByaWNlTWV0cmljcyBmcm9tICcuL2FuYWx5dGljcy9pdGluZXJhcnlfcHJpY2VfbWV0cmljcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL2FuYWx5dGljc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0FtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmFuYWx5dGljcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7RmxpZ2h0c30gZmxpZ2h0c1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBBbmFseXRpY3Mge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLml0aW5lcmFyeVByaWNlTWV0cmljcyA9IG5ldyBJdGluZXJhcnlQcmljZU1ldHJpY3MoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXRpY3M7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSx3QkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXdFLFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxrQkFBQUMsTUFBQSxFQUFBQyxLQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxLQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxVQUFBLEdBQUFILEtBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxVQUFBLENBQUFDLFVBQUEsR0FBQUQsVUFBQSxDQUFBQyxVQUFBLFdBQUFELFVBQUEsQ0FBQUUsWUFBQSx3QkFBQUYsVUFBQSxFQUFBQSxVQUFBLENBQUFHLFFBQUEsU0FBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFULE1BQUEsRUFBQVUsY0FBQSxDQUFBTixVQUFBLENBQUFPLEdBQUEsR0FBQVAsVUFBQTtBQUFBLFNBQUFRLGFBQUFDLFdBQUEsRUFBQUMsVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQWYsaUJBQUEsQ0FBQWMsV0FBQSxDQUFBRyxTQUFBLEVBQUFGLFVBQUEsT0FBQUMsV0FBQSxFQUFBaEIsaUJBQUEsQ0FBQWMsV0FBQSxFQUFBRSxXQUFBLEdBQUFQLE1BQUEsQ0FBQUMsY0FBQSxDQUFBSSxXQUFBLGlCQUFBTixRQUFBLG1CQUFBTSxXQUFBO0FBQUEsU0FBQUgsZUFBQU8sQ0FBQSxRQUFBZixDQUFBLEdBQUFnQixZQUFBLENBQUFELENBQUEsZ0NBQUFFLE9BQUEsQ0FBQWpCLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQWdCLGFBQUFELENBQUEsRUFBQUcsQ0FBQSxvQkFBQUQsT0FBQSxDQUFBRixDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSSxDQUFBLEdBQUFKLENBQUEsQ0FBQUssTUFBQSxDQUFBQyxXQUFBLGtCQUFBRixDQUFBLFFBQUFuQixDQUFBLEdBQUFtQixDQUFBLENBQUFHLElBQUEsQ0FBQVAsQ0FBQSxFQUFBRyxDQUFBLGdDQUFBRCxPQUFBLENBQUFqQixDQUFBLFVBQUFBLENBQUEsWUFBQXVCLFNBQUEseUVBQUFMLENBQUEsR0FBQU0sTUFBQSxHQUFBQyxNQUFBLEVBQUFWLENBQUE7QUFBQSxTQUFBVyxnQkFBQUMsUUFBQSxFQUFBaEIsV0FBQSxVQUFBZ0IsUUFBQSxZQUFBaEIsV0FBQSxlQUFBWSxTQUFBO0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBZU1LLFNBQVMsZ0JBQUFsQixZQUFBLENBQ2IsU0FBQWtCLFVBQVlDLE1BQU0sRUFBRTtFQUFBSCxlQUFBLE9BQUFFLFNBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBRyxJQUFJQyxtQ0FBcUIsQ0FBQ0YsTUFBTSxDQUFDO0FBQ2hFLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsU0FBUztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119