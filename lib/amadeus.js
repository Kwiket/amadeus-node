"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _client = _interopRequireDefault(require("./amadeus/client"));
var _pagination = _interopRequireDefault(require("./amadeus/client/pagination"));
var _reference_data = _interopRequireDefault(require("./amadeus/namespaces/reference_data"));
var _shopping = _interopRequireDefault(require("./amadeus/namespaces/shopping"));
var _booking = _interopRequireDefault(require("./amadeus/namespaces/booking"));
var _travel = _interopRequireDefault(require("./amadeus/namespaces/travel"));
var _e_reputation = _interopRequireDefault(require("./amadeus/namespaces/e_reputation"));
var _media = _interopRequireDefault(require("./amadeus/namespaces/media"));
var _ordering = _interopRequireDefault(require("./amadeus/namespaces/ordering"));
var _airport = _interopRequireDefault(require("./amadeus/namespaces/airport"));
var _safety = _interopRequireDefault(require("./amadeus/namespaces/safety"));
var _schedule = _interopRequireDefault(require("./amadeus/namespaces/schedule"));
var _analytics = _interopRequireDefault(require("./amadeus/namespaces/analytics"));
var _location = _interopRequireDefault(require("./amadeus/namespaces/location"));
var _airline = _interopRequireDefault(require("./amadeus/namespaces/airline"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * The Amadeus client library for accessing the travel APIs.
 *
 * Initialize using your credentials:
 *
 * ```js
 * var Amadeus = require('amadeus');
 * var amadeus = new Amadeus({
 *     clientId:    'YOUR_CLIENT_ID',
 *     clientSecret: 'YOUR_CLIENT_SECRET'
 * });
 * ```
 *
 * Alternatively, initialize the library using
 * the environment variables `AMADEUS_CLIENT_ID`
 * and `AMADEUS_CLIENT_SECRET`
 *
 * ```js
 * var amadeus = new Amadeus();
 * ```
 *
 * @param {Object} params
 * @param {string} params.clientId the API key used to authenticate the API
 * @param {string} params.clientSecret the API secret used to authenticate
 *  the API
 * @param {Object} [params.logger=console] a `console`-compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @param {string} [params.logLevel='warn'] the log level for the client,
 *  available options are `debug`, `warn`, and `silent`
 * @param {string} [params.hostname='production'] the name of the server API
 *  calls are made to (`production` or `test`)
 * @param {string} [params.host] the full domain or IP for a server to make the
 *  API clal to. Only use this if you don't want to use the provided servers
 * @param {boolean} [params.ssl=true] wether to use SSL for this API call
 * @param {number} [params.port=443] the port to make the API call to
 * @param {string} [params.customAppId=null] a custom App ID to be passed in
 * the User Agent to the server.
 * @param {string} [params.customAppVersion=null] a custom App Version number to
 * be passed in the User Agent to the server.
 * @param {Object} [params.http=https] an optional Node/HTTP(S)-compatible client
 *  that accepts a 'request()' call with an array of options.
 *
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */
var Amadeus = /*#__PURE__*/function () {
  function Amadeus() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Amadeus);
    this.client = new _client["default"](params);
    this.version = this.client.version;
    this.referenceData = new _reference_data["default"](this.client);
    this.shopping = new _shopping["default"](this.client);
    this.booking = new _booking["default"](this.client);
    this.travel = new _travel["default"](this.client);
    this.eReputation = new _e_reputation["default"](this.client);
    this.media = new _media["default"](this.client);
    this.ordering = new _ordering["default"](this.client);
    this.airport = new _airport["default"](this.client);
    this.pagination = new _pagination["default"](this.client);
    this.safety = new _safety["default"](this.client);
    this.schedule = new _schedule["default"](this.client);
    this.analytics = new _analytics["default"](this.client);
    this.location = new _location["default"](this.client);
    this.airline = new _airline["default"](this.client);
  }

  /**
   * The previous page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY',
   *   page: { offset: 2 }
   * }).then(function(response){
   *   console.log(response);
   *   return amadeus.previous(response);
   * }).then(function(previousPage){
   *   console.log(previousPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  return _createClass(Amadeus, [{
    key: "previous",
    value: function previous(response) {
      return this.pagination.page('previous', response);
    }

    /**
     * The next page for the given response. Resolves to null if the page could
     * not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY'
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.next(response);
     * }).then(function(nextPage){
     *   console.log(nextPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "next",
    value: function next(response) {
      return this.pagination.page('next', response);
    }

    /**
     * The first page for the given response. Resolves to null if the page
     * could not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY',
     *   page: { offset: 2 }
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.first(response);
     * }).then(function(firstPage){
     *   console.log(firstPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "first",
    value: function first(response) {
      return this.pagination.page('first', response);
    }

    /**
     * The last page for the given response. Resolves to null if the page
     * could not be found.
     *
     * ```js
     * amadeus.referenceData.locations.get({
     *   keyword: 'LON',
     *   subType: 'AIRPORT,CITY'
     * }).then(function(response){
     *   console.log(response);
     *   return amadeus.last(response);
     * }).then(function(lastPage){
     *   console.log(lastPage);
     * });
     * ```
     *
     * @param response the previous response for an API call
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "last",
    value: function last(response) {
      return this.pagination.page('last', response);
    }
  }]);
}();
/**
 * A handy list of location types, to be used in the locations API:
 *
 * ```js
 * amadeus.referenceData.location.get({
 *   keyword: 'lon',
 *   subType: Amadeus.location.any
 * });
 * ```
 *
 * Currently available are the types `.airport`, `.city`, and `.any`
 */
Amadeus.location = {
  airport: 'AIRPORT',
  city: 'CITY',
  any: 'AIRPORT,CITY'
};

/**
 * A handy list of direction types, to be used in the Flight Busiest Period API:
 *
 * ```js
 * amadeus.travel.analytics.airTraffic.busiestPeriod.get({
 *   cityCode: 'par',
 *   perdiod: 2015,
 *   direction: Amadeus.direction.arriving
 * });
 * ```
 *
 * Currently available are the types `.arriving` and `.departing`
 */

Amadeus.direction = {
  arriving: 'ARRIVING',
  departing: 'DEPARTING'
};
var _default = exports["default"] = Amadeus;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcGFnaW5hdGlvbiIsIl9yZWZlcmVuY2VfZGF0YSIsIl9zaG9wcGluZyIsIl9ib29raW5nIiwiX3RyYXZlbCIsIl9lX3JlcHV0YXRpb24iLCJfbWVkaWEiLCJfb3JkZXJpbmciLCJfYWlycG9ydCIsIl9zYWZldHkiLCJfc2NoZWR1bGUiLCJfYW5hbHl0aWNzIiwiX2xvY2F0aW9uIiwiX2FpcmxpbmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJpIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJ0IiwiX3RvUHJpbWl0aXZlIiwiciIsImUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJBbWFkZXVzIiwicGFyYW1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY2xpZW50IiwiQ2xpZW50IiwidmVyc2lvbiIsInJlZmVyZW5jZURhdGEiLCJSZWZlcmVuY2VEYXRhIiwic2hvcHBpbmciLCJTaG9wcGluZyIsImJvb2tpbmciLCJCb29raW5nIiwidHJhdmVsIiwiVHJhdmVsIiwiZVJlcHV0YXRpb24iLCJFUmVwdXRhdGlvbiIsIm1lZGlhIiwiTWVkaWEiLCJvcmRlcmluZyIsIk9yZGVyaW5nIiwiYWlycG9ydCIsIkFpcnBvcnQiLCJwYWdpbmF0aW9uIiwiUGFnaW5hdGlvbiIsInNhZmV0eSIsIlNhZmV0eSIsInNjaGVkdWxlIiwiU2NoZWR1bGUiLCJhbmFseXRpY3MiLCJBbmFseXRpY3MiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwiYWlybGluZSIsIkFpcmxpbmUiLCJ2YWx1ZSIsInByZXZpb3VzIiwicmVzcG9uc2UiLCJwYWdlIiwibmV4dCIsImZpcnN0IiwibGFzdCIsImNpdHkiLCJhbnkiLCJkaXJlY3Rpb24iLCJhcnJpdmluZyIsImRlcGFydGluZyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvYW1hZGV1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50ICAgICAgICBmcm9tICcuL2FtYWRldXMvY2xpZW50JztcbmltcG9ydCBQYWdpbmF0aW9uICAgIGZyb20gJy4vYW1hZGV1cy9jbGllbnQvcGFnaW5hdGlvbic7XG5cbmltcG9ydCBSZWZlcmVuY2VEYXRhIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhJztcbmltcG9ydCBTaG9wcGluZyAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nJztcbmltcG9ydCBCb29raW5nICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2Jvb2tpbmcnO1xuaW1wb3J0IFRyYXZlbCAgICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsJztcbmltcG9ydCBFUmVwdXRhdGlvbiAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2VfcmVwdXRhdGlvbic7XG5pbXBvcnQgTWVkaWEgICAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9tZWRpYSc7XG5pbXBvcnQgT3JkZXJpbmcgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZyc7XG5pbXBvcnQgQWlycG9ydCAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9haXJwb3J0JztcbmltcG9ydCBTYWZldHkgICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3NhZmV0eSc7XG5pbXBvcnQgU2NoZWR1bGUgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9zY2hlZHVsZSc7XG5pbXBvcnQgQW5hbHl0aWNzICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9hbmFseXRpY3MnO1xuaW1wb3J0IExvY2F0aW9uICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvbG9jYXRpb24nO1xuaW1wb3J0IEFpcmxpbmUgICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvYWlybGluZSc7XG5cblxuLyoqXG4gKiBUaGUgQW1hZGV1cyBjbGllbnQgbGlicmFyeSBmb3IgYWNjZXNzaW5nIHRoZSB0cmF2ZWwgQVBJcy5cbiAqXG4gKiBJbml0aWFsaXplIHVzaW5nIHlvdXIgY3JlZGVudGlhbHM6XG4gKlxuICogYGBganNcbiAqIHZhciBBbWFkZXVzID0gcmVxdWlyZSgnYW1hZGV1cycpO1xuICogdmFyIGFtYWRldXMgPSBuZXcgQW1hZGV1cyh7XG4gKiAgICAgY2xpZW50SWQ6ICAgICdZT1VSX0NMSUVOVF9JRCcsXG4gKiAgICAgY2xpZW50U2VjcmV0OiAnWU9VUl9DTElFTlRfU0VDUkVUJ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBBbHRlcm5hdGl2ZWx5LCBpbml0aWFsaXplIHRoZSBsaWJyYXJ5IHVzaW5nXG4gKiB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGBBTUFERVVTX0NMSUVOVF9JRGBcbiAqIGFuZCBgQU1BREVVU19DTElFTlRfU0VDUkVUYFxuICpcbiAqIGBgYGpzXG4gKiB2YXIgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNsaWVudElkIHRoZSBBUEkga2V5IHVzZWQgdG8gYXV0aGVudGljYXRlIHRoZSBBUElcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY2xpZW50U2VjcmV0IHRoZSBBUEkgc2VjcmV0IHVzZWQgdG8gYXV0aGVudGljYXRlXG4gKiAgdGhlIEFQSVxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXMubG9nZ2VyPWNvbnNvbGVdIGEgYGNvbnNvbGVgLWNvbXBhdGlibGUgbG9nZ2VyIHRoYXRcbiAqICBhY2NlcHRzIGBsb2dgLCBgZXJyb3JgIGFuZCBgZGVidWdgIGNhbGxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMubG9nTGV2ZWw9J3dhcm4nXSB0aGUgbG9nIGxldmVsIGZvciB0aGUgY2xpZW50LFxuICogIGF2YWlsYWJsZSBvcHRpb25zIGFyZSBgZGVidWdgLCBgd2FybmAsIGFuZCBgc2lsZW50YFxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuaG9zdG5hbWU9J3Byb2R1Y3Rpb24nXSB0aGUgbmFtZSBvZiB0aGUgc2VydmVyIEFQSVxuICogIGNhbGxzIGFyZSBtYWRlIHRvIChgcHJvZHVjdGlvbmAgb3IgYHRlc3RgKVxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuaG9zdF0gdGhlIGZ1bGwgZG9tYWluIG9yIElQIGZvciBhIHNlcnZlciB0byBtYWtlIHRoZVxuICogIEFQSSBjbGFsIHRvLiBPbmx5IHVzZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRvIHVzZSB0aGUgcHJvdmlkZWQgc2VydmVyc1xuICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1zLnNzbD10cnVlXSB3ZXRoZXIgdG8gdXNlIFNTTCBmb3IgdGhpcyBBUEkgY2FsbFxuICogQHBhcmFtIHtudW1iZXJ9IFtwYXJhbXMucG9ydD00NDNdIHRoZSBwb3J0IHRvIG1ha2UgdGhlIEFQSSBjYWxsIHRvXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5jdXN0b21BcHBJZD1udWxsXSBhIGN1c3RvbSBBcHAgSUQgdG8gYmUgcGFzc2VkIGluXG4gKiB0aGUgVXNlciBBZ2VudCB0byB0aGUgc2VydmVyLlxuICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMuY3VzdG9tQXBwVmVyc2lvbj1udWxsXSBhIGN1c3RvbSBBcHAgVmVyc2lvbiBudW1iZXIgdG9cbiAqIGJlIHBhc3NlZCBpbiB0aGUgVXNlciBBZ2VudCB0byB0aGUgc2VydmVyLlxuICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXMuaHR0cD1odHRwc10gYW4gb3B0aW9uYWwgTm9kZS9IVFRQKFMpLWNvbXBhdGlibGUgY2xpZW50XG4gKiAgdGhhdCBhY2NlcHRzIGEgJ3JlcXVlc3QoKScgY2FsbCB3aXRoIGFuIGFycmF5IG9mIG9wdGlvbnMuXG4gKlxuICogQHByb3BlcnR5IHtDbGllbnR9IGNsaWVudCBUaGUgY2xpZW50IGZvciBtYWtpbmcgYXV0aGVudGljYXRlZCBIVFRQIGNhbGxzXG4gKiBAcHJvcGVydHkge251bWJlcn0gdmVyc2lvbiBUaGUgdmVyc2lvbiBvZiB0aGlzIEFQSSBjbGllbnRcbiAqL1xuY2xhc3MgQW1hZGV1cyB7XG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XG4gICAgdGhpcy5jbGllbnQgPSBuZXcgQ2xpZW50KHBhcmFtcyk7XG4gICAgdGhpcy52ZXJzaW9uID0gdGhpcy5jbGllbnQudmVyc2lvbjtcblxuICAgIHRoaXMucmVmZXJlbmNlRGF0YSAgPSBuZXcgUmVmZXJlbmNlRGF0YSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5zaG9wcGluZyAgICAgICA9IG5ldyBTaG9wcGluZyh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5ib29raW5nICAgICAgICA9IG5ldyBCb29raW5nKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLnRyYXZlbCAgICAgICAgID0gbmV3IFRyYXZlbCh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5lUmVwdXRhdGlvbiAgICA9IG5ldyBFUmVwdXRhdGlvbih0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5tZWRpYSAgICAgICAgICA9IG5ldyBNZWRpYSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5vcmRlcmluZyAgICAgICA9IG5ldyBPcmRlcmluZyh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5haXJwb3J0ICAgICAgICA9IG5ldyBBaXJwb3J0KHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLnBhZ2luYXRpb24gICAgID0gbmV3IFBhZ2luYXRpb24odGhpcy5jbGllbnQpO1xuICAgIHRoaXMuc2FmZXR5ICAgICAgICAgPSBuZXcgU2FmZXR5KHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLnNjaGVkdWxlICAgICAgID0gbmV3IFNjaGVkdWxlKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmFuYWx5dGljcyAgICAgID0gbmV3IEFuYWx5dGljcyh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5sb2NhdGlvbiAgICAgICA9IG5ldyBMb2NhdGlvbih0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5haXJsaW5lICAgICAgICA9IG5ldyBBaXJsaW5lKHRoaXMuY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcHJldmlvdXMgcGFnZSBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLiBSZXNvbHZlcyB0byBudWxsIGlmIHRoZSBwYWdlXG4gICAqIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdMT04nLFxuICAgKiAgIHN1YlR5cGU6ICdBSVJQT1JULENJVFknLFxuICAgKiAgIHBhZ2U6IHsgb2Zmc2V0OiAyIH1cbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLnByZXZpb3VzKHJlc3BvbnNlKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihwcmV2aW91c1BhZ2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKHByZXZpb3VzUGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgcHJldmlvdXMocmVzcG9uc2UpIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCdwcmV2aW91cycsIHJlc3BvbnNlKTsgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmV4dCBwYWdlIGZvciB0aGUgZ2l2ZW4gcmVzcG9uc2UuIFJlc29sdmVzIHRvIG51bGwgaWYgdGhlIHBhZ2UgY291bGRcbiAgICogbm90IGJlIGZvdW5kLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ0xPTicsXG4gICAqICAgc3ViVHlwZTogJ0FJUlBPUlQsQ0lUWSdcbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLm5leHQocmVzcG9uc2UpO1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKG5leHRQYWdlKXtcbiAgICogICBjb25zb2xlLmxvZyhuZXh0UGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgbmV4dChyZXNwb25zZSkgICAgIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCduZXh0JywgcmVzcG9uc2UpOyB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaXJzdCBwYWdlIGZvciB0aGUgZ2l2ZW4gcmVzcG9uc2UuIFJlc29sdmVzIHRvIG51bGwgaWYgdGhlIHBhZ2VcbiAgICogY291bGQgbm90IGJlIGZvdW5kLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ0xPTicsXG4gICAqICAgc3ViVHlwZTogJ0FJUlBPUlQsQ0lUWScsXG4gICAqICAgcGFnZTogeyBvZmZzZXQ6IDIgfVxuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAqICAgcmV0dXJuIGFtYWRldXMuZmlyc3QocmVzcG9uc2UpO1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKGZpcnN0UGFnZSl7XG4gICAqICAgY29uc29sZS5sb2coZmlyc3RQYWdlKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHByZXZpb3VzIHJlc3BvbnNlIGZvciBhbiBBUEkgY2FsbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqL1xuICBmaXJzdChyZXNwb25zZSkgICAgeyByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLnBhZ2UoJ2ZpcnN0JywgcmVzcG9uc2UpOyB9XG5cbiAgLyoqXG4gICAqIFRoZSBsYXN0IHBhZ2UgZm9yIHRoZSBnaXZlbiByZXNwb25zZS4gUmVzb2x2ZXMgdG8gbnVsbCBpZiB0aGUgcGFnZVxuICAgKiBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnTE9OJyxcbiAgICogICBzdWJUeXBlOiAnQUlSUE9SVCxDSVRZJ1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAqICAgcmV0dXJuIGFtYWRldXMubGFzdChyZXNwb25zZSk7XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24obGFzdFBhZ2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKGxhc3RQYWdlKTtcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHByZXZpb3VzIHJlc3BvbnNlIGZvciBhbiBBUEkgY2FsbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqL1xuICBsYXN0KHJlc3BvbnNlKSAgICAgeyByZXR1cm4gdGhpcy5wYWdpbmF0aW9uLnBhZ2UoJ2xhc3QnLCByZXNwb25zZSk7IH1cbn1cblxuXG4vKipcbiAqIEEgaGFuZHkgbGlzdCBvZiBsb2NhdGlvbiB0eXBlcywgdG8gYmUgdXNlZCBpbiB0aGUgbG9jYXRpb25zIEFQSTpcbiAqXG4gKiBgYGBqc1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9uLmdldCh7XG4gKiAgIGtleXdvcmQ6ICdsb24nLFxuICogICBzdWJUeXBlOiBBbWFkZXVzLmxvY2F0aW9uLmFueVxuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBDdXJyZW50bHkgYXZhaWxhYmxlIGFyZSB0aGUgdHlwZXMgYC5haXJwb3J0YCwgYC5jaXR5YCwgYW5kIGAuYW55YFxuICovXG5BbWFkZXVzLmxvY2F0aW9uID0ge1xuICBhaXJwb3J0OiAnQUlSUE9SVCcsXG4gIGNpdHk6ICdDSVRZJyxcbiAgYW55OiAnQUlSUE9SVCxDSVRZJ1xufTtcblxuLyoqXG4gKiBBIGhhbmR5IGxpc3Qgb2YgZGlyZWN0aW9uIHR5cGVzLCB0byBiZSB1c2VkIGluIHRoZSBGbGlnaHQgQnVzaWVzdCBQZXJpb2QgQVBJOlxuICpcbiAqIGBgYGpzXG4gKiBhbWFkZXVzLnRyYXZlbC5hbmFseXRpY3MuYWlyVHJhZmZpYy5idXNpZXN0UGVyaW9kLmdldCh7XG4gKiAgIGNpdHlDb2RlOiAncGFyJyxcbiAqICAgcGVyZGlvZDogMjAxNSxcbiAqICAgZGlyZWN0aW9uOiBBbWFkZXVzLmRpcmVjdGlvbi5hcnJpdmluZ1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBDdXJyZW50bHkgYXZhaWxhYmxlIGFyZSB0aGUgdHlwZXMgYC5hcnJpdmluZ2AgYW5kIGAuZGVwYXJ0aW5nYFxuICovXG5cbkFtYWRldXMuZGlyZWN0aW9uID0ge1xuICBhcnJpdmluZzogJ0FSUklWSU5HJyxcbiAgZGVwYXJ0aW5nOiAnREVQQVJUSU5HJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW1hZGV1cztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsT0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsV0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUUsZUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUcsU0FBQSxHQUFBSixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUksUUFBQSxHQUFBTCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUssT0FBQSxHQUFBTixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU0sYUFBQSxHQUFBUCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQU8sTUFBQSxHQUFBUixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVEsU0FBQSxHQUFBVCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVMsUUFBQSxHQUFBVixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVUsT0FBQSxHQUFBWCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVcsU0FBQSxHQUFBWixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQVksVUFBQSxHQUFBYixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQWEsU0FBQSxHQUFBZCxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQWMsUUFBQSxHQUFBZixzQkFBQSxDQUFBQyxPQUFBO0FBQXlELFNBQUFELHVCQUFBZ0IsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBQUEsU0FBQUUsUUFBQUMsQ0FBQSxzQ0FB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