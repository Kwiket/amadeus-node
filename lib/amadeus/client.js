"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _events = _interopRequireDefault(require("events"));
var _util = _interopRequireDefault(require("util"));
var _access_token = _interopRequireDefault(require("./client/access_token"));
var _listener = _interopRequireDefault(require("./client/listener"));
var _request = _interopRequireDefault(require("./client/request"));
var _validator = _interopRequireDefault(require("./client/validator"));
var _package = _interopRequireDefault(require("../../package.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A convenient wrapper around the API, allowing for generic, authenticated and
 * unauthenticated API calls without having to manage the serialization,
 * desrialization, and authentication.
 *
 * Generally you do not need to use this object directly. Instead it is used
 * indirectly by the various namespaced methods for every API call.
 *
 * For example, the following are the semantically the same.
 *
 * ```js
 * amadeus.client.get('/v1/reference-data/urls/checkin-links', params);
 * amadeus.amadeus.reference_data.urls.checkin_links.get(params);
 * ```
 *
 * @param {Object} options a list of options. See {@link Amadeus} .
 * @property {string} clientId the API key used to authenticate the API
 * @property {string} clientSecret the API secret used to authenticate
 *  the API
 * @property {Object} logger the `console`-compatible logger used to debug calls
 * @property {string} logLevel the log level for the client, available options
 *  are `debug`, `warn`, and `silent`. Defaults to 'silent'
 * @property {string} host the hostname of the server API calls are made to
 * @property {number} port the port the server API calls are made to
 * @property {boolean} ssl wether an SSL request is made to the server
 * @property {string} customAppId the custom App ID to be passed in the User
 *  Agent to the server
 * @property {string} customAppVersion the custom App Version number to be
 *  passed in the User Agent to the server
 * @property {Object} http the Node/HTTP(S)-compatible client used to make
 *  requests
 * @property {number} version The version of this API client
 */
var Client = /*#__PURE__*/function () {
  function Client() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Client);
    new _validator["default"]().validateAndInitialize(this, options);
    this.accessToken = new _access_token["default"](this);
    this.version = _package["default"].version;
  }

  /**
   * Make an authenticated GET API call.
   *
   * ```js
   * amadeus.client.get('/v2/foo/bar', { some: 'data' });
   * ```
   * @param {string} path the full path of the API endpoint
   * @param {Object} [params={}] the query string parameters
   * @param {Object} headers request headers
   * @return {Promise.<Response,ResponseError>} a Promise
   */
  return _createClass(Client, [{
    key: "get",
    value: function get(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('GET', path, params, headers);
    }

    /**
     * Make an authenticated POST API call.
     *
     * ```js
     * amadeus.client.post('/v2/foo/bar', { some: 'data' });
     * ```
     * @param {string} path the full path of the API endpoint
     * @param {Object} [params={}] the POST parameters
     * @param {Object} headers request headers
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "post",
    value: function post(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('POST', path, params, headers);
    }

    /**
     * Make an authenticated DELETE API call.
     *
     * ```js
     * amadeus.client.delete('/v2/foo/bar', { some: 'data' });
     * ```
     * @param {string} path the full path of the API endpoint
     * @param {Object} [params={}] the query string parameters
     * @param {Object} headers request headers
     * @return {Promise.<Response,ResponseError>} a Promise
     */
  }, {
    key: "delete",
    value: function _delete(path) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('DELETE', path, params, headers);
    }

    // PROTECTED

    /**
     * Make an authenticated API call.
     *
     * ```js
     * amadeus.client.call('GET', '/v2/foo/bar', { some: 'data' });
     * ```
     * @param {string} verb the HTTP method, for example `GET` or `POST`
     * @param {string} path the full path of the API endpoint
     * @param {Object} [params={}] the POST parameters
     * @param {Object} headers request headers
     * @return {Promise.<Response,ResponseError>} a Promise
     * @protected
     */
  }, {
    key: "request",
    value: function request(verb, path) {
      var _this = this;
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      return this.accessToken.bearerToken(this).then(function (bearerToken) {
        return _this.unauthenticatedRequest(verb, path, params, bearerToken, headers);
      });
    }

    // PRIVATE

    /**
     * Make any kind of API call, authenticated or not
     *
     * Used by the .get, .post methods to make API calls.
     *
     * Sets up a new Promise and then excutes the API call, triggering the Promise
     * to be called when the API call fails or succeeds.
     *
     * @param {string} verb the HTTP method, for example `GET` or `POST`
     * @param {string} path the full path of the API endpoint
     * @param {Object} params the parameters to pass in the query or body
     * @param {string} [bearerToken=null] the BearerToken as generated by the
     * @param {Object} headers request headers
     *  AccessToken class
     * @return {Promise.<Response,ResponseError>} a Promise
     * @private
     */
  }, {
    key: "unauthenticatedRequest",
    value: function unauthenticatedRequest(verb, path, params) {
      var bearerToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      var request = this.buildRequest(verb, path, params, bearerToken, headers);
      this.log(request);
      var emitter = new _events["default"]();
      var promise = this.buildPromise(emitter);
      this.execute(request, emitter);
      return promise;
    }

    /**
     * Actually executes the API call.
     *
     * @param {Request} request the request to execute
     * @param {EventEmitter} emitter the event emitter to notify of changes
     * @private
     */
  }, {
    key: "execute",
    value: function execute(request, emitter) {
      var http_request = this.http.request(request.options());
      var listener = new _listener["default"](request, emitter, this);
      http_request.on('response', listener.onResponse.bind(listener));
      http_request.on('error', listener.onError.bind(listener));
      http_request.write(request.body());
      http_request.end();
    }

    /**
     * Builds a Request object to be used in the API call
     *
     * @param {string} verb the HTTP method, for example `GET` or `POST`
     * @param {string} path the full path of the API endpoint
     * @param {Object} params the parameters to pass in the query or body
     * @param {string} [bearerToken=null] the BearerToken as generated by the
     * @param {Object} headers request headers
     *  AccessToken class
     * @return {Request}
     * @private
     */
  }, {
    key: "buildRequest",
    value: function buildRequest(verb, path, params, bearerToken) {
      var headers = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
      return new _request["default"]({
        host: this.host,
        verb: verb,
        path: path,
        params: params,
        bearerToken: bearerToken,
        clientVersion: this.version,
        languageVersion: process.versions.node,
        appId: this.customAppId,
        appVersion: this.customAppVersion,
        port: this.port,
        ssl: this.ssl,
        headers: headers
      });
    }

    /**
     * Builds a Promise to be returned to the API user
     *
     * @param  {type} emitter the event emitter to notify of changes
     * @return {Promise} a promise
     * @private
     */
  }, {
    key: "buildPromise",
    value: function buildPromise(emitter) {
      return new Promise(function (resolve, reject) {
        emitter.on('resolve', function (response) {
          return resolve(response);
        });
        emitter.on('reject', function (error) {
          return reject(error);
        });
      });
    }

    /**
     * Logs the request, when in debug mode
     *
     * @param  {Request} request the request object to log
     * @private
     */
  }, {
    key: "log",
    value: function log(request) {
      /* istanbul ignore next */
      if (this.debug()) {
        this.logger.log(_util["default"].inspect(request, false, null));
      }
    }

    /**
     * Determines if this client is in debug mode
     *
     * @return {boolean}
     */
  }, {
    key: "debug",
    value: function debug() {
      return this.logLevel == 'debug';
    }

    /**
     * Determines if this client is in warn or debug mode
     *
     * @return {boolean}
     */
  }, {
    key: "warn",
    value: function warn() {
      return this.logLevel == 'warn' || this.debug();
    }
  }]);
}();
var _default = exports["default"] = Client;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdXRpbCIsIl9hY2Nlc3NfdG9rZW4iLCJfbGlzdGVuZXIiLCJfcmVxdWVzdCIsIl92YWxpZGF0b3IiLCJfcGFja2FnZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInQiLCJfdG9QcmltaXRpdmUiLCJyIiwiZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIkNsaWVudCIsIm9wdGlvbnMiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJWYWxpZGF0b3IiLCJ2YWxpZGF0ZUFuZEluaXRpYWxpemUiLCJhY2Nlc3NUb2tlbiIsIkFjY2Vzc1Rva2VuIiwidmVyc2lvbiIsInBrZyIsInZhbHVlIiwiZ2V0IiwicGF0aCIsInBhcmFtcyIsImhlYWRlcnMiLCJyZXF1ZXN0IiwicG9zdCIsIl9kZWxldGUiLCJ2ZXJiIiwiX3RoaXMiLCJiZWFyZXJUb2tlbiIsInRoZW4iLCJ1bmF1dGhlbnRpY2F0ZWRSZXF1ZXN0IiwiYnVpbGRSZXF1ZXN0IiwibG9nIiwiZW1pdHRlciIsIkV2ZW50RW1pdHRlciIsInByb21pc2UiLCJidWlsZFByb21pc2UiLCJleGVjdXRlIiwiaHR0cF9yZXF1ZXN0IiwiaHR0cCIsImxpc3RlbmVyIiwiTGlzdGVuZXIiLCJvbiIsIm9uUmVzcG9uc2UiLCJiaW5kIiwib25FcnJvciIsIndyaXRlIiwiYm9keSIsImVuZCIsIlJlcXVlc3QiLCJob3N0IiwiY2xpZW50VmVyc2lvbiIsImxhbmd1YWdlVmVyc2lvbiIsInByb2Nlc3MiLCJ2ZXJzaW9ucyIsIm5vZGUiLCJhcHBJZCIsImN1c3RvbUFwcElkIiwiYXBwVmVyc2lvbiIsImN1c3RvbUFwcFZlcnNpb24iLCJwb3J0Iiwic3NsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXNwb25zZSIsImVycm9yIiwiZGVidWciLCJsb2dnZXIiLCJ1dGlsIiwiaW5zcGVjdCIsImxvZ0xldmVsIiwid2FybiIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYW1hZGV1cy9jbGllbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5cbmltcG9ydCBBY2Nlc3NUb2tlbiBmcm9tICcuL2NsaWVudC9hY2Nlc3NfdG9rZW4nO1xuaW1wb3J0IExpc3RlbmVyIGZyb20gJy4vY2xpZW50L2xpc3RlbmVyJztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vY2xpZW50L3JlcXVlc3QnO1xuaW1wb3J0IFZhbGlkYXRvciBmcm9tICcuL2NsaWVudC92YWxpZGF0b3InO1xuXG5pbXBvcnQgcGtnIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbi8qKlxuICogQSBjb252ZW5pZW50IHdyYXBwZXIgYXJvdW5kIHRoZSBBUEksIGFsbG93aW5nIGZvciBnZW5lcmljLCBhdXRoZW50aWNhdGVkIGFuZFxuICogdW5hdXRoZW50aWNhdGVkIEFQSSBjYWxscyB3aXRob3V0IGhhdmluZyB0byBtYW5hZ2UgdGhlIHNlcmlhbGl6YXRpb24sXG4gKiBkZXNyaWFsaXphdGlvbiwgYW5kIGF1dGhlbnRpY2F0aW9uLlxuICpcbiAqIEdlbmVyYWxseSB5b3UgZG8gbm90IG5lZWQgdG8gdXNlIHRoaXMgb2JqZWN0IGRpcmVjdGx5LiBJbnN0ZWFkIGl0IGlzIHVzZWRcbiAqIGluZGlyZWN0bHkgYnkgdGhlIHZhcmlvdXMgbmFtZXNwYWNlZCBtZXRob2RzIGZvciBldmVyeSBBUEkgY2FsbC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBhcmUgdGhlIHNlbWFudGljYWxseSB0aGUgc2FtZS5cbiAqXG4gKiBgYGBqc1xuICogYW1hZGV1cy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvdXJscy9jaGVja2luLWxpbmtzJywgcGFyYW1zKTtcbiAqIGFtYWRldXMuYW1hZGV1cy5yZWZlcmVuY2VfZGF0YS51cmxzLmNoZWNraW5fbGlua3MuZ2V0KHBhcmFtcyk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBhIGxpc3Qgb2Ygb3B0aW9ucy4gU2VlIHtAbGluayBBbWFkZXVzfSAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xpZW50SWQgdGhlIEFQSSBrZXkgdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIEFQSVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsaWVudFNlY3JldCB0aGUgQVBJIHNlY3JldCB1c2VkIHRvIGF1dGhlbnRpY2F0ZVxuICogIHRoZSBBUElcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBsb2dnZXIgdGhlIGBjb25zb2xlYC1jb21wYXRpYmxlIGxvZ2dlciB1c2VkIHRvIGRlYnVnIGNhbGxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbG9nTGV2ZWwgdGhlIGxvZyBsZXZlbCBmb3IgdGhlIGNsaWVudCwgYXZhaWxhYmxlIG9wdGlvbnNcbiAqICBhcmUgYGRlYnVnYCwgYHdhcm5gLCBhbmQgYHNpbGVudGAuIERlZmF1bHRzIHRvICdzaWxlbnQnXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9zdCB0aGUgaG9zdG5hbWUgb2YgdGhlIHNlcnZlciBBUEkgY2FsbHMgYXJlIG1hZGUgdG9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3J0IHRoZSBwb3J0IHRoZSBzZXJ2ZXIgQVBJIGNhbGxzIGFyZSBtYWRlIHRvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHNzbCB3ZXRoZXIgYW4gU1NMIHJlcXVlc3QgaXMgbWFkZSB0byB0aGUgc2VydmVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VzdG9tQXBwSWQgdGhlIGN1c3RvbSBBcHAgSUQgdG8gYmUgcGFzc2VkIGluIHRoZSBVc2VyXG4gKiAgQWdlbnQgdG8gdGhlIHNlcnZlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGN1c3RvbUFwcFZlcnNpb24gdGhlIGN1c3RvbSBBcHAgVmVyc2lvbiBudW1iZXIgdG8gYmVcbiAqICBwYXNzZWQgaW4gdGhlIFVzZXIgQWdlbnQgdG8gdGhlIHNlcnZlclxuICogQHByb3BlcnR5IHtPYmplY3R9IGh0dHAgdGhlIE5vZGUvSFRUUChTKS1jb21wYXRpYmxlIGNsaWVudCB1c2VkIHRvIG1ha2VcbiAqICByZXF1ZXN0c1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhpcyBBUEkgY2xpZW50XG4gKi9cbmNsYXNzIENsaWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIG5ldyBWYWxpZGF0b3IoKS52YWxpZGF0ZUFuZEluaXRpYWxpemUodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG5ldyBBY2Nlc3NUb2tlbih0aGlzKTtcbiAgICB0aGlzLnZlcnNpb24gPSBwa2cudmVyc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGF1dGhlbnRpY2F0ZWQgR0VUIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5nZXQoJy92Mi9mb28vYmFyJywgeyBzb21lOiAnZGF0YScgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dIHRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyByZXF1ZXN0IGhlYWRlcnNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgZ2V0KHBhdGgsIHBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCBwYXRoLCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYXV0aGVudGljYXRlZCBQT1NUIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5wb3N0KCcvdjIvZm9vL2JhcicsIHsgc29tZTogJ2RhdGEnIH0pO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XSB0aGUgUE9TVCBwYXJhbWV0ZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXJzIHJlcXVlc3QgaGVhZGVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqL1xuICBwb3N0KHBhdGgsIHBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQT1NUJywgcGF0aCwgcGFyYW1zLCBoZWFkZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGF1dGhlbnRpY2F0ZWQgREVMRVRFIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5kZWxldGUoJy92Mi9mb28vYmFyJywgeyBzb21lOiAnZGF0YScgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dIHRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyByZXF1ZXN0IGhlYWRlcnNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgZGVsZXRlKHBhdGgsIHBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdERUxFVEUnLCBwYXRoLCBwYXJhbXMsIGhlYWRlcnMpO1xuICB9XG5cbiAgLy8gUFJPVEVDVEVEXG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYXV0aGVudGljYXRlZCBBUEkgY2FsbC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5jbGllbnQuY2FsbCgnR0VUJywgJy92Mi9mb28vYmFyJywgeyBzb21lOiAnZGF0YScgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmVyYiB0aGUgSFRUUCBtZXRob2QsIGZvciBleGFtcGxlIGBHRVRgIG9yIGBQT1NUYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dIHRoZSBQT1NUIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlcnMgcmVxdWVzdCBoZWFkZXJzXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcmVxdWVzdCh2ZXJiLCBwYXRoLCBwYXJhbXMgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZXNzVG9rZW4uYmVhcmVyVG9rZW4odGhpcykudGhlbigoYmVhcmVyVG9rZW4pID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVuYXV0aGVudGljYXRlZFJlcXVlc3QoXG4gICAgICAgIHZlcmIsXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgYmVhcmVyVG9rZW4sXG4gICAgICAgIGhlYWRlcnNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBQUklWQVRFXG5cbiAgLyoqXG4gICAqIE1ha2UgYW55IGtpbmQgb2YgQVBJIGNhbGwsIGF1dGhlbnRpY2F0ZWQgb3Igbm90XG4gICAqXG4gICAqIFVzZWQgYnkgdGhlIC5nZXQsIC5wb3N0IG1ldGhvZHMgdG8gbWFrZSBBUEkgY2FsbHMuXG4gICAqXG4gICAqIFNldHMgdXAgYSBuZXcgUHJvbWlzZSBhbmQgdGhlbiBleGN1dGVzIHRoZSBBUEkgY2FsbCwgdHJpZ2dlcmluZyB0aGUgUHJvbWlzZVxuICAgKiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgQVBJIGNhbGwgZmFpbHMgb3Igc3VjY2VlZHMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiIHRoZSBIVFRQIG1ldGhvZCwgZm9yIGV4YW1wbGUgYEdFVGAgb3IgYFBPU1RgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgaW4gdGhlIHF1ZXJ5IG9yIGJvZHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtiZWFyZXJUb2tlbj1udWxsXSB0aGUgQmVhcmVyVG9rZW4gYXMgZ2VuZXJhdGVkIGJ5IHRoZVxuICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyByZXF1ZXN0IGhlYWRlcnNcbiAgICogIEFjY2Vzc1Rva2VuIGNsYXNzXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVuYXV0aGVudGljYXRlZFJlcXVlc3QodmVyYiwgcGF0aCwgcGFyYW1zLCBiZWFyZXJUb2tlbiA9IG51bGwsIGhlYWRlcnMgPSB7fSkge1xuICAgIGxldCByZXF1ZXN0ID0gdGhpcy5idWlsZFJlcXVlc3QodmVyYiwgcGF0aCwgcGFyYW1zLCBiZWFyZXJUb2tlbiwgaGVhZGVycyk7XG4gICAgdGhpcy5sb2cocmVxdWVzdCk7XG4gICAgbGV0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgbGV0IHByb21pc2UgPSB0aGlzLmJ1aWxkUHJvbWlzZShlbWl0dGVyKTtcblxuICAgIHRoaXMuZXhlY3V0ZShyZXF1ZXN0LCBlbWl0dGVyKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBY3R1YWxseSBleGVjdXRlcyB0aGUgQVBJIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdCB0aGUgcmVxdWVzdCB0byBleGVjdXRlXG4gICAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIHRoZSBldmVudCBlbWl0dGVyIHRvIG5vdGlmeSBvZiBjaGFuZ2VzXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBleGVjdXRlKHJlcXVlc3QsIGVtaXR0ZXIpIHtcbiAgICBsZXQgaHR0cF9yZXF1ZXN0ID0gdGhpcy5odHRwLnJlcXVlc3QocmVxdWVzdC5vcHRpb25zKCkpO1xuICAgIGxldCBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihyZXF1ZXN0LCBlbWl0dGVyLCB0aGlzKTtcbiAgICBodHRwX3JlcXVlc3Qub24oJ3Jlc3BvbnNlJywgbGlzdGVuZXIub25SZXNwb25zZS5iaW5kKGxpc3RlbmVyKSk7XG4gICAgaHR0cF9yZXF1ZXN0Lm9uKCdlcnJvcicsIGxpc3RlbmVyLm9uRXJyb3IuYmluZChsaXN0ZW5lcikpO1xuICAgIGh0dHBfcmVxdWVzdC53cml0ZShyZXF1ZXN0LmJvZHkoKSk7XG4gICAgaHR0cF9yZXF1ZXN0LmVuZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyBhIFJlcXVlc3Qgb2JqZWN0IHRvIGJlIHVzZWQgaW4gdGhlIEFQSSBjYWxsXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiIHRoZSBIVFRQIG1ldGhvZCwgZm9yIGV4YW1wbGUgYEdFVGAgb3IgYFBPU1RgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zIHRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgaW4gdGhlIHF1ZXJ5IG9yIGJvZHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtiZWFyZXJUb2tlbj1udWxsXSB0aGUgQmVhcmVyVG9rZW4gYXMgZ2VuZXJhdGVkIGJ5IHRoZVxuICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVycyByZXF1ZXN0IGhlYWRlcnNcbiAgICogIEFjY2Vzc1Rva2VuIGNsYXNzXG4gICAqIEByZXR1cm4ge1JlcXVlc3R9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBidWlsZFJlcXVlc3QodmVyYiwgcGF0aCwgcGFyYW1zLCBiZWFyZXJUb2tlbiwgaGVhZGVycyA9IHt9KSB7XG4gICAgcmV0dXJuIG5ldyBSZXF1ZXN0KHtcbiAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcbiAgICAgIHZlcmI6IHZlcmIsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICBiZWFyZXJUb2tlbjogYmVhcmVyVG9rZW4sXG4gICAgICBjbGllbnRWZXJzaW9uOiB0aGlzLnZlcnNpb24sXG4gICAgICBsYW5ndWFnZVZlcnNpb246IHByb2Nlc3MudmVyc2lvbnMubm9kZSxcbiAgICAgIGFwcElkOiB0aGlzLmN1c3RvbUFwcElkLFxuICAgICAgYXBwVmVyc2lvbjogdGhpcy5jdXN0b21BcHBWZXJzaW9uLFxuICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgc3NsOiB0aGlzLnNzbCxcbiAgICAgIGhlYWRlcnMsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgUHJvbWlzZSB0byBiZSByZXR1cm5lZCB0byB0aGUgQVBJIHVzZXJcbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gZW1pdHRlciB0aGUgZXZlbnQgZW1pdHRlciB0byBub3RpZnkgb2YgY2hhbmdlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkUHJvbWlzZShlbWl0dGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGVtaXR0ZXIub24oJ3Jlc29sdmUnLCAocmVzcG9uc2UpID0+IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICAgIGVtaXR0ZXIub24oJ3JlamVjdCcsIChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9ncyB0aGUgcmVxdWVzdCwgd2hlbiBpbiBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge1JlcXVlc3R9IHJlcXVlc3QgdGhlIHJlcXVlc3Qgb2JqZWN0IHRvIGxvZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbG9nKHJlcXVlc3QpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmICh0aGlzLmRlYnVnKCkpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmxvZyh1dGlsLmluc3BlY3QocmVxdWVzdCwgZmFsc2UsIG51bGwpKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGlzIGNsaWVudCBpcyBpbiBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dMZXZlbCA9PSAnZGVidWcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhpcyBjbGllbnQgaXMgaW4gd2FybiBvciBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB3YXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsID09ICd3YXJuJyB8fCB0aGlzLmRlYnVnKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBRSxhQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxTQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxRQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxVQUFBLEdBQUFOLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBTSxRQUFBLEdBQUFQLHNCQUFBLENBQUFDLE9BQUE7QUFBcUMsU0FBQUQsdUJBQUFRLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssZ0JBQUFDLFFBQUEsRUFBQUMsV0FBQSxVQUFBRCxRQUFBLFlBQUFDLFdBQUEsZUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFB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