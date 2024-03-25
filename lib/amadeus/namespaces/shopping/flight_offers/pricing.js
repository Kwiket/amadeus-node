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
 * `/v1/shopping/flight-offers/pricing` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.pricing;
 * ```
 *
 * @param {Client} client
 */
var Pricing = /*#__PURE__*/function () {
  function Pricing(client) {
    _classCallCheck(this, Pricing);
    this.client = client;
  }

  /**
   * To get or confirm the price of a flight and obtain information
   * about taxes and fees to be applied to the entire journey. It also
   * retrieves ancillary information (e.g. additional bag or extra legroom
   * seats pricing) and the payment information details requested at booking time.
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {string} params.data.type 'flight-offers-pricing' for Flight Offer Pricing
   * @param {Array} params.data.flightOffers list of flight offers for which the
   * pricing needs to be retrieved
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.flightOffers.pricing.post({
   *  'data': {
   *      'type': 'flight-offers-pricing',
   *      'flightOffers': []
   *  }
   * });
   * ```
   */
  return _createClass(Pricing, [{
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var additionalParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // Convert additionalParams object to query string
      var queryString = Object.keys(additionalParams).map(function (key) {
        return key + '=' + additionalParams[key];
      }).join('&');

      // Check if queryString is empty before appending it to the URL
      var url = '/v1/shopping/flight-offers/pricing';
      if (queryString !== '') {
        url += '?' + queryString;
      }
      return this.client.post(url, params, headers);
    }
  }]);
}();
var _default = exports["default"] = Pricing;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcmljaW5nIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWRkaXRpb25hbFBhcmFtcyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJqb2luIiwidXJsIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVycy9wcmljaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJpY2luZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5wcmljaW5nO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBQcmljaW5nIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogVG8gZ2V0IG9yIGNvbmZpcm0gdGhlIHByaWNlIG9mIGEgZmxpZ2h0IGFuZCBvYnRhaW4gaW5mb3JtYXRpb25cbiAgICogYWJvdXQgdGF4ZXMgYW5kIGZlZXMgdG8gYmUgYXBwbGllZCB0byB0aGUgZW50aXJlIGpvdXJuZXkuIEl0IGFsc29cbiAgICogcmV0cmlldmVzIGFuY2lsbGFyeSBpbmZvcm1hdGlvbiAoZS5nLiBhZGRpdGlvbmFsIGJhZyBvciBleHRyYSBsZWdyb29tXG4gICAqIHNlYXRzIHByaWNpbmcpIGFuZCB0aGUgcGF5bWVudCBpbmZvcm1hdGlvbiBkZXRhaWxzIHJlcXVlc3RlZCBhdCBib29raW5nIHRpbWUuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcy5kYXRhXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGF0YS50eXBlICdmbGlnaHQtb2ZmZXJzLXByaWNpbmcnIGZvciBGbGlnaHQgT2ZmZXIgUHJpY2luZ1xuICAgKiBAcGFyYW0ge0FycmF5fSBwYXJhbXMuZGF0YS5mbGlnaHRPZmZlcnMgbGlzdCBvZiBmbGlnaHQgb2ZmZXJzIGZvciB3aGljaCB0aGVcbiAgICogcHJpY2luZyBuZWVkcyB0byBiZSByZXRyaWV2ZWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5wcmljaW5nLnBvc3Qoe1xuICAgKiAgJ2RhdGEnOiB7XG4gICAqICAgICAgJ3R5cGUnOiAnZmxpZ2h0LW9mZmVycy1wcmljaW5nJyxcbiAgICogICAgICAnZmxpZ2h0T2ZmZXJzJzogW11cbiAgICogIH1cbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSwgYWRkaXRpb25hbFBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30pIHtcbiAgICAvLyBDb252ZXJ0IGFkZGl0aW9uYWxQYXJhbXMgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYWRkaXRpb25hbFBhcmFtcylcbiAgICAgIC5tYXAoa2V5ID0+IGtleSArICc9JyArIGFkZGl0aW9uYWxQYXJhbXNba2V5XSlcbiAgICAgIC5qb2luKCcmJyk7XG5cbiAgICAvLyBDaGVjayBpZiBxdWVyeVN0cmluZyBpcyBlbXB0eSBiZWZvcmUgYXBwZW5kaW5nIGl0IHRvIHRoZSBVUkxcbiAgICBsZXQgdXJsID0gJy92MS9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzL3ByaWNpbmcnO1xuICAgIGlmIChxdWVyeVN0cmluZyAhPT0gJycpIHtcbiAgICAgIHVybCArPSAnPycgKyBxdWVyeVN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCh1cmwsIHBhcmFtcywgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxPQUFPO0VBQ1gsU0FBQUEsUUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsT0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRSxPQUFBRSxZQUFBLENBQUFILE9BQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBc0JBLFNBQUFDLEtBQUEsRUFBdUQ7TUFBQSxJQUFsREMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFBQSxJQUFFRyxnQkFBZ0IsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUksT0FBTyxHQUFBSixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDbkQ7TUFDQSxJQUFNSyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixnQkFBZ0IsQ0FBQyxDQUM5Q0ssR0FBRyxDQUFDLFVBQUFaLEdBQUc7UUFBQSxPQUFJQSxHQUFHLEdBQUcsR0FBRyxHQUFHTyxnQkFBZ0IsQ0FBQ1AsR0FBRyxDQUFDO01BQUEsRUFBQyxDQUM3Q2EsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7TUFFWjtNQUNBLElBQUlDLEdBQUcsR0FBRyxvQ0FBb0M7TUFDOUMsSUFBSUwsV0FBVyxLQUFLLEVBQUUsRUFBRTtRQUN0QkssR0FBRyxJQUFJLEdBQUcsR0FBR0wsV0FBVztNQUMxQjtNQUVBLE9BQU8sSUFBSSxDQUFDWixNQUFNLENBQUNLLElBQUksQ0FBQ1ksR0FBRyxFQUFFWCxNQUFNLEVBQUVLLE9BQU8sQ0FBQztJQUMvQztFQUFDO0FBQUE7QUFBQSxJQUFBTyxRQUFBLEdBQUFDLE9BQUEsY0FHWXBCLE9BQU87QUFBQXFCLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=