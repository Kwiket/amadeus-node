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
 * `/v1/shopping/flight-offers/prediction` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.prediction;
 * ```
 *
 * @param {Client} client
 */
var FlightChoicePrediction = /*#__PURE__*/function () {
  function FlightChoicePrediction(client) {
    _classCallCheck(this, FlightChoicePrediction);
    this.client = client;
  }

  /**
   * Returns a list of flight offers with the probability to be chosen.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Returns flights from NYC to MAD with the probability to be chosen.
   *
   * ```js
   * amadeus.shopping.flightOffersSearch.get({
   *     originLocationCode: 'SYD',
   *     destinationLocationCode: 'BKK',
   *     departureDate: '2020-08-01',
   *     adults: '2'
   * }).then(function(response){
   *     return amadeus.shopping.flightOffers.prediction.post(
   *       JSON.stringify(response)
   *     );
   * }).then(function(response){
   *     console.log(response.data);
   * }).catch(function(responseError){
   *     console.log(responseError);
   * });
   * ```
   */
  return _createClass(FlightChoicePrediction, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.post('/v2/shopping/flight-offers/prediction', params, headers);
    }
  }]);
}();
var _default = exports["default"] = FlightChoicePrediction;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRDaG9pY2VQcmVkaWN0aW9uIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGVhZGVycyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2ZsaWdodF9vZmZlcnMvZmxpZ2h0X2Nob2ljZV9wcmVkaWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJlZGljdGlvbmAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5wcmVkaWN0aW9uO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRDaG9pY2VQcmVkaWN0aW9uIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgZmxpZ2h0IG9mZmVycyB3aXRoIHRoZSBwcm9iYWJpbGl0eSB0byBiZSBjaG9zZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBSZXR1cm5zIGZsaWdodHMgZnJvbSBOWUMgdG8gTUFEIHdpdGggdGhlIHByb2JhYmlsaXR5IHRvIGJlIGNob3Nlbi5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnNTZWFyY2guZ2V0KHtcbiAgICogICAgIG9yaWdpbkxvY2F0aW9uQ29kZTogJ1NZRCcsXG4gICAqICAgICBkZXN0aW5hdGlvbkxvY2F0aW9uQ29kZTogJ0JLSycsXG4gICAqICAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMScsXG4gICAqICAgICBhZHVsdHM6ICcyJ1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICAgIHJldHVybiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5wcmVkaWN0aW9uLnBvc3QoXG4gICAqICAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKVxuICAgKiAgICAgKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICogfSkuY2F0Y2goZnVuY3Rpb24ocmVzcG9uc2VFcnJvcil7XG4gICAqICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVycm9yKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoJy92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzL3ByZWRpY3Rpb24nLCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsaWdodENob2ljZVByZWRpY3Rpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsc0JBQXNCO0VBQzFCLFNBQUFBLHVCQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixzQkFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXhCRSxPQUFBRSxZQUFBLENBQUFILHNCQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQXlCQSxTQUFBQyxLQUFBLEVBQWdDO01BQUEsSUFBM0JDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUcsT0FBTyxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDNUIsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLHVDQUF1QyxFQUFFQyxNQUFNLEVBQUVJLE9BQU8sQ0FBQztJQUNuRjtFQUFDO0FBQUE7QUFBQSxJQUFBQyxRQUFBLEdBQUFDLE9BQUEsY0FHWWIsc0JBQXNCO0FBQUFjLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=