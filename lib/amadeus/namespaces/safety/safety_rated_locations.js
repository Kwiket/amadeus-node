"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _by_square = _interopRequireDefault(require("./safety_rated_locations/by_square"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/safety/safety-rated-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety.safetyRatedLocations;
 * ```
 *
 * @param {Client} client
 */
var SafetyRatedLocations = /*#__PURE__*/function () {
  function SafetyRatedLocations(client) {
    _classCallCheck(this, SafetyRatedLocations);
    this.client = client;
    this.bySquare = new _by_square["default"](client);
  }

  /**
   * /safety/safety-rated-locations
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * How safe is Barcelona? (based a geo location and a radius)
   *
   * ```js
   * amadeus.safety.safetyRatedLocations.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */
  return _createClass(SafetyRatedLocations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/safety/safety-rated-locations', params);
    }
  }]);
}();
var _default = exports["default"] = SafetyRatedLocations;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlfc3F1YXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJ0IiwiX3RvUHJpbWl0aXZlIiwiciIsImUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJTYWZldHlSYXRlZExvY2F0aW9ucyIsImNsaWVudCIsImJ5U3F1YXJlIiwiQnlTcXVhcmUiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3NhZmV0eS9zYWZldHlfcmF0ZWRfbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCeVNxdWFyZSBmcm9tICcuL3NhZmV0eV9yYXRlZF9sb2NhdGlvbnMvYnlfc3F1YXJlJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2FmZXR5L3NhZmV0eS1yYXRlZC1sb2NhdGlvbnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zYWZldHkuc2FmZXR5UmF0ZWRMb2NhdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFNhZmV0eVJhdGVkTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5ieVNxdWFyZSA9IG5ldyBCeVNxdWFyZShjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIC9zYWZldHkvc2FmZXR5LXJhdGVkLWxvY2F0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMubGF0aXR1ZGUgbGF0aXR1ZGUgbG9jYXRpb24gdG8gYmUgYXQgdGhlIGNlbnRlciBvZlxuICAgKiAgIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sb25naXR1ZGUgbG9uZ2l0dWRlIGxvY2F0aW9uIHRvIGJlIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogICB0aGUgc2VhcmNoIGNpcmNsZSAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMucmFkaXVzIHJhZGl1cyBvZiB0aGUgc2VhcmNoIGluIEtpbG9tZXRlciAtIG9wdGlvbmFsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogSG93IHNhZmUgaXMgQmFyY2Vsb25hPyAoYmFzZWQgYSBnZW8gbG9jYXRpb24gYW5kIGEgcmFkaXVzKVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNhZmV0eS5zYWZldHlSYXRlZExvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGxvbmdpdHVkZTogMi4xNjA4NzMsXG4gICAqICAgbGF0aXR1ZGU6IDQxLjM5NzE1OFxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2FmZXR5L3NhZmV0eS1yYXRlZC1sb2NhdGlvbnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhZmV0eVJhdGVkTG9jYXRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBMEQsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssZ0JBQUFDLFFBQUEsRUFBQUMsV0FBQSxVQUFBRCxRQUFBLFlBQUFDLFdBQUEsZUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQWYsV0FBQSxFQUFBZ0IsVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQWQsaUJBQUEsQ0FBQUYsV0FBQSxDQUFBSCxTQUFBLEVBQUFtQixVQUFBLE9BQUFDLFdBQUEsRUFBQWYsaUJBQUEsQ0FBQUYsV0FBQSxFQUFBaUIsV0FBQSxHQUFBTixNQUFBLENBQUFDLGNBQUEsQ0FBQVosV0FBQSxpQkFBQVUsUUFBQSxtQkFBQVYsV0FBQTtBQUFBLFNBQUFhLGVBQUFLLENBQUEsUUFBQWIsQ0FBQSxHQUFBYyxZQUFBLENBQUFELENBQUEsZ0NBQUExQixPQUFBLENBQUFhLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQWMsYUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG9CQUFBNUIsT0FBQSxDQUFBMEIsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUF4QixNQUFBLENBQUE0QixXQUFBLGtCQUFBRCxDQUFBLFFBQUFoQixDQUFBLEdBQUFnQixDQUFBLENBQUFFLElBQUEsQ0FBQUwsQ0FBQSxFQUFBRSxDQUFBLGdDQUFBNUIsT0FBQSxDQUFBYSxDQUFBLFVBQUFBLENBQUEsWUFBQUosU0FBQSx5RUFBQW1CLENBQUEsR0FBQUksTUFBQSxHQUFBQyxNQUFBLEVBQUFQLENBQUE7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNUSxvQkFBb0I7RUFDeEIsU0FBQUEscUJBQVlDLE1BQU0sRUFBRTtJQUFBN0IsZUFBQSxPQUFBNEIsb0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxRQUFRLEdBQUcsSUFBSUMscUJBQVEsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3RDOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFuQkUsT0FBQVosWUFBQSxDQUFBVyxvQkFBQTtJQUFBWixHQUFBO0lBQUFnQixLQUFBLEVBb0JBLFNBQUFDLElBQUEsRUFBaUI7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQTNCLE1BQUEsUUFBQTJCLFNBQUEsUUFBQUMsU0FBQSxHQUFBRCxTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNOLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDLG1DQUFtQyxFQUFFQyxNQUFNLENBQUM7SUFDckU7RUFBQztBQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLGNBR1lWLG9CQUFvQjtBQUFBVyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119