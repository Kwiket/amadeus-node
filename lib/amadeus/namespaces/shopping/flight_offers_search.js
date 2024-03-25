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
 * `/v2/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffersSeach;
 * ```
 *
 * @param {Client} client
 */
var FlightOffersSearch = /*#__PURE__*/function () {
  function FlightOffersSearch(client) {
    _classCallCheck(this, FlightOffersSearch);
    this.client = client;
  }

  /**
   * Get cheapest flight recommendations and prices on a given journey.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart
   * from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.adults the number of adult travelers (age 12 or older on date of departure)
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get cheapest flight recommendations and prices for SYD-BKK on 2020-08-01 for 2 adults
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *    originLocationCode: 'SYD',
   *    destinationLocationCode: 'BKK',
   *    departureDate: '2020-08-01',
   *    adults: '2'
   * });
   * ```
   */
  return _createClass(FlightOffersSearch, [{
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.get('/v2/shopping/flight-offers', params, headers);
    }

    /**
     * To do a customized search with every option available.
     *
     * @param {Object} params
     * @param {Double} params.getFlightOffersBody list of criteria to retrieve a list of flight offers
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     * To do a customized search with given options.
     *
     * ```js
     * amadeus.shopping.flightOffersSearch.post (JSON.stringify({
          "currencyCode": "USD",
          "originDestinations": [
            {
              "id": "1",
              "originLocationCode": "RIO",
              "destinationLocationCode": "MAD",
              "departureDateTimeRange": {
                "date": "2020-03-01",
                "time": "10:00:00"
              }
            },
            {
              "id": "2",
              "originLocationCode": "MAD",
              "destinationLocationCode": "RIO",
              "departureDateTimeRange": {
                "date": "2020-03-05",
                "time": "17:00:00"
              }
            }
          ],
          "travelers": [
            {
              "id": "1",
              "travelerType": "ADULT",
              "fareOptions": [
                "STANDARD"
              ]
            },
            {
              "id": "2",
              "travelerType": "CHILD",
              "fareOptions": [
                "STANDARD"
              ]
            }
          ],
          "sources": [
            "GDS"
          ],
          "searchCriteria": {
            "maxFlightOffers": 50,
            "flightFilters": {
              "cabinRestrictions": [
                {
                  "cabin": "BUSINESS",
                  "coverage": "MOST_SEGMENTS",
                  "originDestinationIds": [
                    "1"
                  ]
                }
              ],
              "carrierRestrictions": {
                "excludedCarrierCodes": [
                  "AA",
                  "TP",
                  "AZ"
                ]
              }
            }
          }
        }))
      * ```
      */
  }, {
    key: "post",
    value: function post() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.client.post('/v2/shopping/flight-offers', params, headers);
    }
  }]);
}();
var _default = exports["default"] = FlightOffersSearch;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPZmZlcnNTZWFyY2giLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImhlYWRlcnMiLCJwb3N0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVyc19zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVyc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYWNoO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRPZmZlcnNTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hlYXBlc3QgZmxpZ2h0IHJlY29tbWVuZGF0aW9ucyBhbmQgcHJpY2VzIG9uIGEgZ2l2ZW4gam91cm5leS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLm9yaWdpbkxvY2F0aW9uQ29kZSBjaXR5L2FpcnBvcnQgSUFUQSBjb2RlIGZyb20gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgZGVwYXJ0LCBlLmcuIEJPUyBmb3IgQm9zdG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25Mb2NhdGlvbkNvZGUgY2l0eS9haXJwb3J0IElBVEEgY29kZSB0byB3aGljaCB0aGUgdHJhdmVsZXIgaXMgZ29pbmcsIGUuZy4gUEFSIGZvciBQYXJpc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRlcGFydHVyZURhdGUgdGhlIGRhdGUgb24gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgZGVwYXJ0XG4gICAqIGZyb20gdGhlIG9yaWdpbiB0byBnbyB0byB0aGUgZGVzdGluYXRpb24uIERhdGVzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIElTTyA4NjAxIFlZWVktTU0tREQgZm9ybWF0LCBlLmcuIDIwMTctMTItMjVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5hZHVsdHMgdGhlIG51bWJlciBvZiBhZHVsdCB0cmF2ZWxlcnMgKGFnZSAxMiBvciBvbGRlciBvbiBkYXRlIG9mIGRlcGFydHVyZSlcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBHZXQgY2hlYXBlc3QgZmxpZ2h0IHJlY29tbWVuZGF0aW9ucyBhbmQgcHJpY2VzIGZvciBTWUQtQktLIG9uIDIwMjAtMDgtMDEgZm9yIDIgYWR1bHRzXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLmdldCh7XG4gICAqICAgIG9yaWdpbkxvY2F0aW9uQ29kZTogJ1NZRCcsXG4gICAqICAgIGRlc3RpbmF0aW9uTG9jYXRpb25Db2RlOiAnQktLJyxcbiAgICogICAgZGVwYXJ0dXJlRGF0ZTogJzIwMjAtMDgtMDEnLFxuICAgKiAgICBhZHVsdHM6ICcyJ1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30sIGhlYWRlcnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzJywgcGFyYW1zLCBoZWFkZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBkbyBhIGN1c3RvbWl6ZWQgc2VhcmNoIHdpdGggZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmdldEZsaWdodE9mZmVyc0JvZHkgbGlzdCBvZiBjcml0ZXJpYSB0byByZXRyaWV2ZSBhIGxpc3Qgb2YgZmxpZ2h0IG9mZmVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIGRvIGEgY3VzdG9taXplZCBzZWFyY2ggd2l0aCBnaXZlbiBvcHRpb25zLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYXJjaC5wb3N0IChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwiY3VycmVuY3lDb2RlXCI6IFwiVVNEXCIsXG4gICAgICAgIFwib3JpZ2luRGVzdGluYXRpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCJvcmlnaW5Mb2NhdGlvbkNvZGVcIjogXCJSSU9cIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogXCJNQURcIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlRGF0ZVRpbWVSYW5nZVwiOiB7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjAtMDMtMDFcIixcbiAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTA6MDA6MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwib3JpZ2luTG9jYXRpb25Db2RlXCI6IFwiTUFEXCIsXG4gICAgICAgICAgICBcImRlc3RpbmF0aW9uTG9jYXRpb25Db2RlXCI6IFwiUklPXCIsXG4gICAgICAgICAgICBcImRlcGFydHVyZURhdGVUaW1lUmFuZ2VcIjoge1xuICAgICAgICAgICAgICBcImRhdGVcIjogXCIyMDIwLTAzLTA1XCIsXG4gICAgICAgICAgICAgIFwidGltZVwiOiBcIjE3OjAwOjAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwidHJhdmVsZXJzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgXCJ0cmF2ZWxlclR5cGVcIjogXCJBRFVMVFwiLFxuICAgICAgICAgICAgXCJmYXJlT3B0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIFwiU1RBTkRBUkRcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjJcIixcbiAgICAgICAgICAgIFwidHJhdmVsZXJUeXBlXCI6IFwiQ0hJTERcIixcbiAgICAgICAgICAgIFwiZmFyZU9wdGlvbnNcIjogW1xuICAgICAgICAgICAgICBcIlNUQU5EQVJEXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic291cmNlc1wiOiBbXG4gICAgICAgICAgXCJHRFNcIlxuICAgICAgICBdLFxuICAgICAgICBcInNlYXJjaENyaXRlcmlhXCI6IHtcbiAgICAgICAgICBcIm1heEZsaWdodE9mZmVyc1wiOiA1MCxcbiAgICAgICAgICBcImZsaWdodEZpbHRlcnNcIjoge1xuICAgICAgICAgICAgXCJjYWJpblJlc3RyaWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImNhYmluXCI6IFwiQlVTSU5FU1NcIixcbiAgICAgICAgICAgICAgICBcImNvdmVyYWdlXCI6IFwiTU9TVF9TRUdNRU5UU1wiLFxuICAgICAgICAgICAgICAgIFwib3JpZ2luRGVzdGluYXRpb25JZHNcIjogW1xuICAgICAgICAgICAgICAgICAgXCIxXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImNhcnJpZXJSZXN0cmljdGlvbnNcIjoge1xuICAgICAgICAgICAgICBcImV4Y2x1ZGVkQ2FycmllckNvZGVzXCI6IFtcbiAgICAgICAgICAgICAgICBcIkFBXCIsXG4gICAgICAgICAgICAgICAgXCJUUFwiLFxuICAgICAgICAgICAgICAgIFwiQVpcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSlcbiAgICAqIGBgYFxuICAgICovXG4gIHBvc3QocGFyYW1zID0ge30sIGhlYWRlcnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycycsIHBhcmFtcywgaGVhZGVycyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T2ZmZXJzU2VhcmNoO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGtCQUFrQjtFQUN0QixTQUFBQSxtQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsa0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFyQkUsT0FBQUUsWUFBQSxDQUFBSCxrQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFzQkEsU0FBQUMsSUFBQSxFQUErQjtNQUFBLElBQTNCQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUFBLElBQUVHLE9BQU8sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQzNCLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRUMsTUFBTSxFQUFFSSxPQUFPLENBQUM7SUFDdkU7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBMUVFO0lBQUFQLEdBQUE7SUFBQUMsS0FBQSxFQTJFQSxTQUFBTyxLQUFBLEVBQWdDO01BQUEsSUFBM0JMLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQUEsSUFBRUcsT0FBTyxHQUFBSCxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDNUIsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1csSUFBSSxDQUFDLDRCQUE0QixFQUFFTCxNQUFNLEVBQUVJLE9BQU8sQ0FBQztJQUN4RTtFQUFDO0FBQUE7QUFBQSxJQUFBRSxRQUFBLEdBQUFDLE9BQUEsY0FHWWQsa0JBQWtCO0FBQUFlLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=