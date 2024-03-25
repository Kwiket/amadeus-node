"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _qs = _interopRequireDefault(require("qs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A Request object containing all the compiled information about this request.
 *
 * @property {string} host the host used for this API call
 * @property {number} port the port for this API call. Standard set to 443.
 * @property {boolean} ssl wether this API call uses SSL
 * @property {string} scheme the scheme inferred from the SSL state
 * @property {string} verb the HTTP method, for example `GET` or `POST`
 * @property {string} path the full path of the API endpoint
 * @property {Object} params the parameters to pass in the query or body
 * @property {string} queryPath the path and query string used for the API call
 * @property {string} bearerToken the authentication token
 * @property {string} clientVersion the version of the Amadeus library
 * @property {string} languageVersion the version of Node used
 * @property {string} appId the custom ID of the application using this library
 * @property {string} appVersion the custom version of the application
 *  using this library
 * @property {Object} headers the request headers
 *
 * @param {Object} options
 */
var Request = /*#__PURE__*/function () {
  function Request(options) {
    _classCallCheck(this, Request);
    this.host = options.host;
    this.port = options.port;
    this.ssl = options.ssl;
    this.scheme = this.ssl ? 'https' : 'http';
    this.verb = options.verb;
    this.path = options.path;
    this.params = options.params;
    this.queryPath = this.fullQueryPath();
    this.bearerToken = options.bearerToken;
    this.clientVersion = options.clientVersion;
    this.languageVersion = options.languageVersion;
    this.appId = options.appId;
    this.appVersion = options.appVersion;
    this.headers = options.headers || {};
    this.headers['User-Agent'] = this.userAgent();
    this.headers['Accept'] = 'application/json, application/vnd.amadeus+json';
    this.ListHTTPOverride = ['/v2/shopping/flight-offers', '/v1/shopping/seatmaps', '/v1/shopping/availability/flight-availabilities', '/v2/shopping/flight-offers/prediction', '/v1/shopping/flight-offers/pricing', '/v1/shopping/flight-offers/upselling'];
    this.addAuthorizationHeader();
    this.addContentTypeHeader();
    this.addHTTPOverrideHeader();
  }

  // PROTECTED

  /**
   * Compiles the options for the HTTP request.
   *
   * Used by Client.execute when executing this request against the server.
   *
   * @return {Object} an associative array of options to be passed into the
   *  Client.execute function
   * @protected
   */
  return _createClass(Request, [{
    key: "options",
    value: function options() {
      var options = {
        host: this.host,
        port: this.port,
        protocol: "".concat(this.scheme, ":"),
        path: this.queryPath,
        method: this.verb,
        headers: this.headers
      };
      return options;
    }

    /**
     * Creats the body for the API cal, serializing the params if the verb is POST.
     *
     * @return {string} the serialized params
     * @protected
     */
  }, {
    key: "body",
    value: function body() {
      if (this.verb !== 'POST') {
        return '';
      } else {
        if (!this.bearerToken) {
          return _qs["default"].stringify(this.params);
        }
        return this.params;
      }
    }

    // PRIVATE

    /**
     * Build up the custom User Agent
     *
     * @return {string} a user agent in the format "library/version language/version app/version"
     * @private
     */
  }, {
    key: "userAgent",
    value: function userAgent() {
      var userAgent = "amadeus-node/".concat(this.clientVersion, " node/").concat(this.languageVersion);
      if (!this.appId) {
        return userAgent;
      }
      return "".concat(userAgent, " ").concat(this.appId, "/").concat(this.appVersion);
    }

    /**
     * Build the full query path, combining the path with the query params if the
     * verb is 'GET'. For example: '/foo/bar?baz=qux'
     *
     * @return {string} the path and params combined into one string.
     * @private
     */
  }, {
    key: "fullQueryPath",
    value: function fullQueryPath() {
      if (this.verb === 'POST') {
        return this.path;
      } else {
        return "".concat(this.path, "?").concat(_qs["default"].stringify(this.params));
      }
    }

    /**
     * Adds an Authorization header if the BearerToken is present
     *
     * @private
     */
  }, {
    key: "addAuthorizationHeader",
    value: function addAuthorizationHeader() {
      if (!this.bearerToken) {
        return;
      }
      this.headers['Authorization'] = "Bearer ".concat(this.bearerToken);
    }

    /**
     * Adds an Content-Type header if the HTTP method equals POST
     *
     * @private
     */
  }, {
    key: "addContentTypeHeader",
    value: function addContentTypeHeader() {
      if (this.verb === 'POST' && !this.bearerToken) {
        this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      } else {
        this.headers['Content-Type'] = 'application/vnd.amadeus+json';
      }
      return;
    }

    /**
     * Adds HTTPOverride method if it is required
     *
     *  @private
     */
  }, {
    key: "addHTTPOverrideHeader",
    value: function addHTTPOverrideHeader() {
      if (this.verb === 'POST' && this.ListHTTPOverride.includes(this.path)) {
        this.headers['X-HTTP-Method-Override'] = 'GET';
      }
      return;
    }
  }]);
}();
var _default = exports["default"] = Request;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInQiLCJfdG9QcmltaXRpdmUiLCJyIiwiZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIlJlcXVlc3QiLCJvcHRpb25zIiwiaG9zdCIsInBvcnQiLCJzc2wiLCJzY2hlbWUiLCJ2ZXJiIiwicGF0aCIsInBhcmFtcyIsInF1ZXJ5UGF0aCIsImZ1bGxRdWVyeVBhdGgiLCJiZWFyZXJUb2tlbiIsImNsaWVudFZlcnNpb24iLCJsYW5ndWFnZVZlcnNpb24iLCJhcHBJZCIsImFwcFZlcnNpb24iLCJoZWFkZXJzIiwidXNlckFnZW50IiwiTGlzdEhUVFBPdmVycmlkZSIsImFkZEF1dGhvcml6YXRpb25IZWFkZXIiLCJhZGRDb250ZW50VHlwZUhlYWRlciIsImFkZEhUVFBPdmVycmlkZUhlYWRlciIsInZhbHVlIiwicHJvdG9jb2wiLCJjb25jYXQiLCJtZXRob2QiLCJib2R5IiwicXMiLCJzdHJpbmdpZnkiLCJpbmNsdWRlcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9jbGllbnQvcmVxdWVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXMgZnJvbSAncXMnO1xuXG4vKipcbiAqIEEgUmVxdWVzdCBvYmplY3QgY29udGFpbmluZyBhbGwgdGhlIGNvbXBpbGVkIGluZm9ybWF0aW9uIGFib3V0IHRoaXMgcmVxdWVzdC5cbiAqXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9zdCB0aGUgaG9zdCB1c2VkIGZvciB0aGlzIEFQSSBjYWxsXG4gKiBAcHJvcGVydHkge251bWJlcn0gcG9ydCB0aGUgcG9ydCBmb3IgdGhpcyBBUEkgY2FsbC4gU3RhbmRhcmQgc2V0IHRvIDQ0My5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gc3NsIHdldGhlciB0aGlzIEFQSSBjYWxsIHVzZXMgU1NMXG4gKiBAcHJvcGVydHkge3N0cmluZ30gc2NoZW1lIHRoZSBzY2hlbWUgaW5mZXJyZWQgZnJvbSB0aGUgU1NMIHN0YXRlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmVyYiB0aGUgSFRUUCBtZXRob2QsIGZvciBleGFtcGxlIGBHRVRgIG9yIGBQT1NUYFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gKiBAcHJvcGVydHkge09iamVjdH0gcGFyYW1zIHRoZSBwYXJhbWV0ZXJzIHRvIHBhc3MgaW4gdGhlIHF1ZXJ5IG9yIGJvZHlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBxdWVyeVBhdGggdGhlIHBhdGggYW5kIHF1ZXJ5IHN0cmluZyB1c2VkIGZvciB0aGUgQVBJIGNhbGxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBiZWFyZXJUb2tlbiB0aGUgYXV0aGVudGljYXRpb24gdG9rZW5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjbGllbnRWZXJzaW9uIHRoZSB2ZXJzaW9uIG9mIHRoZSBBbWFkZXVzIGxpYnJhcnlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYW5ndWFnZVZlcnNpb24gdGhlIHZlcnNpb24gb2YgTm9kZSB1c2VkXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYXBwSWQgdGhlIGN1c3RvbSBJRCBvZiB0aGUgYXBwbGljYXRpb24gdXNpbmcgdGhpcyBsaWJyYXJ5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gYXBwVmVyc2lvbiB0aGUgY3VzdG9tIHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uXG4gKiAgdXNpbmcgdGhpcyBsaWJyYXJ5XG4gKiBAcHJvcGVydHkge09iamVjdH0gaGVhZGVycyB0aGUgcmVxdWVzdCBoZWFkZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuY2xhc3MgUmVxdWVzdCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLmhvc3QgPSBvcHRpb25zLmhvc3Q7XG4gICAgdGhpcy5wb3J0ID0gb3B0aW9ucy5wb3J0O1xuICAgIHRoaXMuc3NsID0gb3B0aW9ucy5zc2w7XG4gICAgdGhpcy5zY2hlbWUgPSB0aGlzLnNzbCA/ICdodHRwcycgOiAnaHR0cCc7XG4gICAgdGhpcy52ZXJiID0gb3B0aW9ucy52ZXJiO1xuICAgIHRoaXMucGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgICB0aGlzLnBhcmFtcyA9IG9wdGlvbnMucGFyYW1zO1xuICAgIHRoaXMucXVlcnlQYXRoID0gdGhpcy5mdWxsUXVlcnlQYXRoKCk7XG4gICAgdGhpcy5iZWFyZXJUb2tlbiA9IG9wdGlvbnMuYmVhcmVyVG9rZW47XG4gICAgdGhpcy5jbGllbnRWZXJzaW9uID0gb3B0aW9ucy5jbGllbnRWZXJzaW9uO1xuICAgIHRoaXMubGFuZ3VhZ2VWZXJzaW9uID0gb3B0aW9ucy5sYW5ndWFnZVZlcnNpb247XG4gICAgdGhpcy5hcHBJZCA9IG9wdGlvbnMuYXBwSWQ7XG4gICAgdGhpcy5hcHBWZXJzaW9uID0gb3B0aW9ucy5hcHBWZXJzaW9uO1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLmhlYWRlcnNbJ1VzZXItQWdlbnQnXSA9IHRoaXMudXNlckFnZW50KCk7XG4gICAgdGhpcy5oZWFkZXJzWydBY2NlcHQnXSA9ICdhcHBsaWNhdGlvbi9qc29uLCBhcHBsaWNhdGlvbi92bmQuYW1hZGV1cytqc29uJztcblxuICAgIHRoaXMuTGlzdEhUVFBPdmVycmlkZSA9IFtcbiAgICAgICcvdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycycsXG4gICAgICAnL3YxL3Nob3BwaW5nL3NlYXRtYXBzJyxcbiAgICAgICcvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5L2ZsaWdodC1hdmFpbGFiaWxpdGllcycsXG4gICAgICAnL3YyL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJlZGljdGlvbicsXG4gICAgICAnL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJpY2luZycsXG4gICAgICAnL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvdXBzZWxsaW5nJyxcbiAgICBdO1xuICAgIHRoaXMuYWRkQXV0aG9yaXphdGlvbkhlYWRlcigpO1xuICAgIHRoaXMuYWRkQ29udGVudFR5cGVIZWFkZXIoKTtcbiAgICB0aGlzLmFkZEhUVFBPdmVycmlkZUhlYWRlcigpO1xuICB9XG5cbiAgLy8gUFJPVEVDVEVEXG5cbiAgLyoqXG4gICAqIENvbXBpbGVzIHRoZSBvcHRpb25zIGZvciB0aGUgSFRUUCByZXF1ZXN0LlxuICAgKlxuICAgKiBVc2VkIGJ5IENsaWVudC5leGVjdXRlIHdoZW4gZXhlY3V0aW5nIHRoaXMgcmVxdWVzdCBhZ2FpbnN0IHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2Ygb3B0aW9ucyB0byBiZSBwYXNzZWQgaW50byB0aGVcbiAgICogIENsaWVudC5leGVjdXRlIGZ1bmN0aW9uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9wdGlvbnMoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICBwcm90b2NvbDogYCR7dGhpcy5zY2hlbWV9OmAsXG4gICAgICBwYXRoOiB0aGlzLnF1ZXJ5UGF0aCxcbiAgICAgIG1ldGhvZDogdGhpcy52ZXJiLFxuICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgIH07XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRzIHRoZSBib2R5IGZvciB0aGUgQVBJIGNhbCwgc2VyaWFsaXppbmcgdGhlIHBhcmFtcyBpZiB0aGUgdmVyYiBpcyBQT1NULlxuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBzZXJpYWxpemVkIHBhcmFtc1xuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBib2R5KCkge1xuICAgIGlmICh0aGlzLnZlcmIgIT09ICdQT1NUJykge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuYmVhcmVyVG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHFzLnN0cmluZ2lmeSh0aGlzLnBhcmFtcyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIC8qKlxuICAgKiBCdWlsZCB1cCB0aGUgY3VzdG9tIFVzZXIgQWdlbnRcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSBhIHVzZXIgYWdlbnQgaW4gdGhlIGZvcm1hdCBcImxpYnJhcnkvdmVyc2lvbiBsYW5ndWFnZS92ZXJzaW9uIGFwcC92ZXJzaW9uXCJcbiAgICogQHByaXZhdGVcbiAgICovXG4gIHVzZXJBZ2VudCgpIHtcbiAgICBsZXQgdXNlckFnZW50ID0gYGFtYWRldXMtbm9kZS8ke3RoaXMuY2xpZW50VmVyc2lvbn0gbm9kZS8ke3RoaXMubGFuZ3VhZ2VWZXJzaW9ufWA7XG4gICAgaWYgKCF0aGlzLmFwcElkKSB7XG4gICAgICByZXR1cm4gdXNlckFnZW50O1xuICAgIH1cbiAgICByZXR1cm4gYCR7dXNlckFnZW50fSAke3RoaXMuYXBwSWR9LyR7dGhpcy5hcHBWZXJzaW9ufWA7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIGZ1bGwgcXVlcnkgcGF0aCwgY29tYmluaW5nIHRoZSBwYXRoIHdpdGggdGhlIHF1ZXJ5IHBhcmFtcyBpZiB0aGVcbiAgICogdmVyYiBpcyAnR0VUJy4gRm9yIGV4YW1wbGU6ICcvZm9vL2Jhcj9iYXo9cXV4J1xuICAgKlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBwYXRoIGFuZCBwYXJhbXMgY29tYmluZWQgaW50byBvbmUgc3RyaW5nLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVsbFF1ZXJ5UGF0aCgpIHtcbiAgICBpZiAodGhpcy52ZXJiID09PSAnUE9TVCcpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnBhdGh9PyR7cXMuc3RyaW5naWZ5KHRoaXMucGFyYW1zKX1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIEF1dGhvcml6YXRpb24gaGVhZGVyIGlmIHRoZSBCZWFyZXJUb2tlbiBpcyBwcmVzZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRBdXRob3JpemF0aW9uSGVhZGVyKCkge1xuICAgIGlmICghdGhpcy5iZWFyZXJUb2tlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0aGlzLmJlYXJlclRva2VufWA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBDb250ZW50LVR5cGUgaGVhZGVyIGlmIHRoZSBIVFRQIG1ldGhvZCBlcXVhbHMgUE9TVFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWRkQ29udGVudFR5cGVIZWFkZXIoKSB7XG4gICAgaWYgKHRoaXMudmVyYiA9PT0gJ1BPU1QnICYmICF0aGlzLmJlYXJlclRva2VuKSB7XG4gICAgICB0aGlzLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vdm5kLmFtYWRldXMranNvbic7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIEhUVFBPdmVycmlkZSBtZXRob2QgaWYgaXQgaXMgcmVxdWlyZWRcbiAgICpcbiAgICogIEBwcml2YXRlXG4gICAqL1xuICBhZGRIVFRQT3ZlcnJpZGVIZWFkZXIoKSB7XG4gICAgaWYgKHRoaXMudmVyYiA9PT0gJ1BPU1QnICYmIHRoaXMuTGlzdEhUVFBPdmVycmlkZS5pbmNsdWRlcyh0aGlzLnBhdGgpKSB7XG4gICAgICB0aGlzLmhlYWRlcnNbJ1gtSFRUUC1NZXRob2QtT3ZlcnJpZGUnXSA9ICdHRVQnO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsR0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQW9CLFNBQUFELHVCQUFBRSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxRQUFBLEVBQUFDLFdBQUEsVUFBQUQsUUFBQSxZQUFBQyxXQUFBLGVBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQUMsTUFBQSxF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