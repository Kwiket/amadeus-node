"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
 * amadeus.safety.safetyRatedLocation;
 * ```
 *
 * @param {Client} client
 */
var SafetyRatedLocation = /*#__PURE__*/function () {
  function SafetyRatedLocation(client, locationId) {
    _classCallCheck(this, SafetyRatedLocation);
    this.client = client;
    this.locationId = locationId;
  }

  /**
   * Retieve safety information of a location by its Id.
   *
   * What is the safety information of a location with Id Q930400801?
   * ```js
   * amadeus.safety.safetyRatedLocation('Q930400801').get();
   * ```
   */
  return _createClass(SafetyRatedLocation, [{
    key: "get",
    value: function get() {
      return this.client.get("/v1/safety/safety-rated-locations/".concat(this.locationId));
    }
  }]);
}();
var _default = exports["default"] = SafetyRatedLocation;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTYWZldHlSYXRlZExvY2F0aW9uIiwiY2xpZW50IiwibG9jYXRpb25JZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2FmZXR5L3NhZmV0eV9yYXRlZF9sb2NhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zYWZldHkvc2FmZXR5LXJhdGVkLWxvY2F0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNhZmV0eS5zYWZldHlSYXRlZExvY2F0aW9uO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBTYWZldHlSYXRlZExvY2F0aW9uIHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBsb2NhdGlvbklkKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5sb2NhdGlvbklkID0gbG9jYXRpb25JZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRpZXZlIHNhZmV0eSBpbmZvcm1hdGlvbiBvZiBhIGxvY2F0aW9uIGJ5IGl0cyBJZC5cbiAgICpcbiAgICogV2hhdCBpcyB0aGUgc2FmZXR5IGluZm9ybWF0aW9uIG9mIGEgbG9jYXRpb24gd2l0aCBJZCBROTMwNDAwODAxP1xuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNhZmV0eS5zYWZldHlSYXRlZExvY2F0aW9uKCdROTMwNDAwODAxJykuZ2V0KCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoYC92MS9zYWZldHkvc2FmZXR5LXJhdGVkLWxvY2F0aW9ucy8ke3RoaXMubG9jYXRpb25JZH1gKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTYWZldHlSYXRlZExvY2F0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLG1CQUFtQjtFQUN2QixTQUFBQSxvQkFBWUMsTUFBTSxFQUFFQyxVQUFVLEVBQUU7SUFBQUMsZUFBQSxPQUFBSCxtQkFBQTtJQUM5QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEUsT0FBQUUsWUFBQSxDQUFBSixtQkFBQTtJQUFBSyxHQUFBO0lBQUFDLEtBQUEsRUFRQSxTQUFBQyxJQUFBLEVBQU07TUFDSixPQUFPLElBQUksQ0FBQ04sTUFBTSxDQUFDTSxHQUFHLHNDQUFBQyxNQUFBLENBQXNDLElBQUksQ0FBQ04sVUFBVSxDQUFFLENBQUM7SUFDaEY7RUFBQztBQUFBO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBR1lWLG1CQUFtQjtBQUFBVyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119