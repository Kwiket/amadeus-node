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
 * `/v1/shopping/seatmaps` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.seatmaps;
 * ```
 *
 * @param {Client} client
 */
var Seatmaps = /*#__PURE__*/function () {
  function Seatmaps(client) {
    _classCallCheck(this, Seatmaps);
    this.client = client;
  }

  /**
   * To retrieve the seat map of each flight present in an order.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Retrieve the seat map for flight order with ID 'XXX'
   *
   * ```js
   * amadeus.shopping.seatmaps.get({
   *    'flight-orderId': 'XXX'}
   * );
   * ```
   */
  return _createClass(Seatmaps, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.get('/v1/shopping/seatmaps', params, headers);
    }

    /**
     * To retrieve the seat map of each flight included in a flight offer.
     *
     * @param {Object} params
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To retrieve the seat map of each flight included in flight offers
     * for MAD-NYC flight on 2020-08-01.
     *
     * ```js
     * amadeus.shopping.flightOffers.get({
     *    origin: 'MAD',
     *    destination: 'NYC',
     *    departureDate: '2020-08-01'
     * }).then(function(response){
     *    return amadeus.shopping.flightOffers.seatmaps.post(
     *        JSON.stringify({
     *            'data': response.data
     *        })
     *    );
     * });
     * ```
     */
  }, {
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.post('/v1/shopping/seatmaps', params, headers);
    }
  }]);
}();
var _default = exports["default"] = Seatmaps;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWF0bWFwcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaGVhZGVycyIsInBvc3QiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9zZWF0bWFwcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9zZWF0bWFwc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLnNlYXRtYXBzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBTZWF0bWFwcyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBwcmVzZW50IGluIGFuIG9yZGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogUmV0cmlldmUgdGhlIHNlYXQgbWFwIGZvciBmbGlnaHQgb3JkZXIgd2l0aCBJRCAnWFhYJ1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLnNlYXRtYXBzLmdldCh7XG4gICAqICAgICdmbGlnaHQtb3JkZXJJZCc6ICdYWFgnfVxuICAgKiApO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3Nob3BwaW5nL3NlYXRtYXBzJywgcGFyYW1zLCBoZWFkZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyByZXRyaWV2ZSB0aGUgc2VhdCBtYXAgb2YgZWFjaCBmbGlnaHQgaW5jbHVkZWQgaW4gYSBmbGlnaHQgb2ZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyByZXRyaWV2ZSB0aGUgc2VhdCBtYXAgb2YgZWFjaCBmbGlnaHQgaW5jbHVkZWQgaW4gZmxpZ2h0IG9mZmVyc1xuICAgKiBmb3IgTUFELU5ZQyBmbGlnaHQgb24gMjAyMC0wOC0wMS5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnMuZ2V0KHtcbiAgICogICAgb3JpZ2luOiAnTUFEJyxcbiAgICogICAgZGVzdGluYXRpb246ICdOWUMnLFxuICAgKiAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMSdcbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgIHJldHVybiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5zZWF0bWFwcy5wb3N0KFxuICAgKiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgKiAgICAgICAgICAgICdkYXRhJzogcmVzcG9uc2UuZGF0YVxuICAgKiAgICAgICAgfSlcbiAgICogICAgKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoJy92MS9zaG9wcGluZy9zZWF0bWFwcycsIHBhcmFtcywgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhdG1hcHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWJFLE9BQUFFLFlBQUEsQ0FBQUgsUUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFjQSxTQUFBQyxJQUFBLEVBQStCO01BQUEsSUFBM0JDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUcsT0FBTyxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDM0IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLHVCQUF1QixFQUFFQyxNQUFNLEVBQUVJLE9BQU8sQ0FBQztJQUNsRTs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBdEJFO0lBQUFQLEdBQUE7SUFBQUMsS0FBQSxFQXVCQSxTQUFBTyxLQUFBLEVBQWdDO01BQUEsSUFBM0JMLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUcsT0FBTyxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDNUIsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLHVCQUF1QixFQUFFTCxNQUFNLEVBQUVJLE9BQU8sQ0FBQztJQUNuRTtFQUFDO0FBQUE7QUFBQSxJQUFBRSxRQUFBLEdBQUFDLE9BQUEsY0FHWWQsUUFBUTtBQUFBZSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119