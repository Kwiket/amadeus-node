"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _airports = _interopRequireDefault(require("./locations/airports"));
var _cities = _interopRequireDefault(require("./locations/cities"));
var _hotel = _interopRequireDefault(require("./locations/hotel"));
var _hotels = _interopRequireDefault(require("./locations/hotels"));
var _poi = _interopRequireDefault(require("./locations/poi"));
var _pois = _interopRequireDefault(require("./locations/pois"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v2/reference-data/locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations;
 * ```
 *
 * @param {Client} client
 * @property {Airports} airports
 */
var Locations = /*#__PURE__*/function () {
  function Locations(client) {
    _classCallCheck(this, Locations);
    this.client = client;
    this.airports = new _airports["default"](client);
    this.cities = new _cities["default"](client);
    this.hotel = new _hotel["default"](client);
    this.hotels = new _hotels["default"](client);
    this.pointsOfInterest = new _pois["default"](client);
  }

  /**
   * Returns a list of airports and cities matching a given keyword.
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent the start of
   *   a word in a city or airport name or code
   * @param {string} params.subType the type of location to search for
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find any location starting with 'lon'
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'lon',
   *   subType: Amadeus.location.any
   * });
   * ```
   */
  return _createClass(Locations, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.client.get('/v1/reference-data/locations', params);
    }
  }, {
    key: "pointOfInterest",
    value: function pointOfInterest(poiId) {
      return new _poi["default"](this.client, poiId);
    }
  }]);
}();
var _default = exports["default"] = Locations;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWlycG9ydHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jaXRpZXMiLCJfaG90ZWwiLCJfaG90ZWxzIiwiX3BvaSIsIl9wb2lzIiwib2JqIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwidCIsIl90b1ByaW1pdGl2ZSIsInIiLCJlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiTG9jYXRpb25zIiwiY2xpZW50IiwiYWlycG9ydHMiLCJBaXJwb3J0cyIsImNpdGllcyIsIkNpdGllcyIsImhvdGVsIiwiSG90ZWwiLCJob3RlbHMiLCJIb3RlbHMiLCJwb2ludHNPZkludGVyZXN0IiwiUG9pbnRzT2ZJbnRlcmVzdCIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwicG9pbnRPZkludGVyZXN0IiwicG9pSWQiLCJQb2ludE9mSW50ZXJlc3QiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9yZWZlcmVuY2VfZGF0YS9sb2NhdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFpcnBvcnRzIGZyb20gJy4vbG9jYXRpb25zL2FpcnBvcnRzJztcbmltcG9ydCBDaXRpZXMgZnJvbSAnLi9sb2NhdGlvbnMvY2l0aWVzJztcbmltcG9ydCBIb3RlbCBmcm9tICcuL2xvY2F0aW9ucy9ob3RlbCc7XG5pbXBvcnQgSG90ZWxzIGZyb20gJy4vbG9jYXRpb25zL2hvdGVscyc7XG5pbXBvcnQgUG9pbnRPZkludGVyZXN0IGZyb20gJy4vbG9jYXRpb25zL3BvaSc7XG5pbXBvcnQgUG9pbnRzT2ZJbnRlcmVzdCBmcm9tICcuL2xvY2F0aW9ucy9wb2lzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0FpcnBvcnRzfSBhaXJwb3J0c1xuICovXG5jbGFzcyBMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmFpcnBvcnRzID0gbmV3IEFpcnBvcnRzKGNsaWVudCk7XG4gICAgdGhpcy5jaXRpZXMgPSBuZXcgQ2l0aWVzKGNsaWVudCk7XG4gICAgdGhpcy5ob3RlbCA9IG5ldyBIb3RlbChjbGllbnQpO1xuICAgIHRoaXMuaG90ZWxzID0gbmV3IEhvdGVscyhjbGllbnQpO1xuICAgIHRoaXMucG9pbnRzT2ZJbnRlcmVzdCA9IG5ldyBQb2ludHNPZkludGVyZXN0KGNsaWVudCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlycG9ydHMgYW5kIGNpdGllcyBtYXRjaGluZyBhIGdpdmVuIGtleXdvcmQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5rZXl3b3JkIGtleXdvcmQgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBzdGFydCBvZlxuICAgKiAgIGEgd29yZCBpbiBhIGNpdHkgb3IgYWlycG9ydCBuYW1lIG9yIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5zdWJUeXBlIHRoZSB0eXBlIG9mIGxvY2F0aW9uIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIGFueSBsb2NhdGlvbiBzdGFydGluZyB3aXRoICdsb24nXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnbG9uJyxcbiAgICogICBzdWJUeXBlOiBBbWFkZXVzLmxvY2F0aW9uLmFueVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zJywgcGFyYW1zKTtcbiAgfVxuXG4gIHBvaW50T2ZJbnRlcmVzdChwb2lJZCkge1xuICAgIHJldHVybiBuZXcgUG9pbnRPZkludGVyZXN0KHRoaXMuY2xpZW50LCBwb2lJZCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbnM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLFNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLE9BQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLE1BQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLE9BQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJ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