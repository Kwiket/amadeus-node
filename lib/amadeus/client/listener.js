"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _response = _interopRequireDefault(require("./response"));
var _util = _interopRequireDefault(require("util"));
var _errors = require("./errors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Listen to changes in the HTTP request and build Response/ResponseError
 * objects accordingly.
 *
 * @param {Request} request the request object used to make the call
 * @param {EventEmitter} emitter a Node event emitter
 * @param {Client} client the client instance to log results to
 * @protected
 */
var Listener = /*#__PURE__*/function () {
  function Listener(request, emitter, client) {
    _classCallCheck(this, Listener);
    this.request = request;
    this.emitter = emitter;
    this.client = client;
  }

  // PROTECTED

  /**
   * Listens to various events on the http_response object, listening for data,
   * connections closing for bad reasons, and the end of the response.
   *
   * Used by the Client when making an API call.
   *
   * @param  {Object} http_response a Node http response object
   * @protected
   */
  return _createClass(Listener, [{
    key: "onResponse",
    value: function onResponse(http_response) {
      var response = new _response["default"](http_response, this.request);
      http_response.on('data', response.addChunk.bind(response));
      http_response.on('end', this.onEnd(response).bind(this));
      http_response.on('close', this.onNetworkError(response).bind(this));
      http_response.on('error', this.onNetworkError(response).bind(this));
    }

    /**
     * Listens to a network error when making an API call.
     *
     * Used by the Client when making an API call.
     *
     * @param  {Object} http_response a Node http response object
     * @protected
     */
  }, {
    key: "onError",
    value: function onError(http_response) {
      var response = new _response["default"](http_response, this.request);
      this.onNetworkError(response)();
    }

    // PRIVATE

    /**
     * When the connection ends, check if the response can be parsed or not and
     * act accordingly.
     *
     * @param  {Response} response
     */
  }, {
    key: "onEnd",
    value: function onEnd(response) {
      var _this = this;
      return function () {
        response.parse();
        if (response.success()) {
          _this.onSuccess(response);
        } else {
          _this.onFail(response);
        }
      };
    }

    /**
     * When the response was successful, resolve the promise and return the
     * response object
     *
     * @param  {Response} response
     */
  }, {
    key: "onSuccess",
    value: function onSuccess(response) {
      this.log(response);
      this.emitter.emit('resolve', response);
    }

    /**
     * When the connection was not successful, determine the reason and resolve
     * the promise accordingly.
     *
     * @param  {Response} response
     */
  }, {
    key: "onFail",
    value: function onFail(response) {
      var Error = this.errorFor(response);
      var error = new Error(response);
      this.log(response, error);
      this.emitter.emit('reject', error);
    }

    /**
     * Find the right error for the given response.
     *
     * @param {Response} reponse
     * @returns {ResponseError}
     */
  }, {
    key: "errorFor",
    value: function errorFor(_ref) {
      var statusCode = _ref.statusCode,
        parsed = _ref.parsed;
      var error = null;
      if (statusCode >= 500) {
        error = _errors.ServerError;
      } else if (statusCode === 401) {
        error = _errors.AuthenticationError;
      } else if (statusCode === 404) {
        error = _errors.NotFoundError;
      } else if (statusCode >= 400) {
        error = _errors.ClientError;
      } else if (!parsed) {
        error = _errors.ParserError;
      } else {
        error = _errors.UnknownError;
      }
      return error;
    }

    /**
     * When the connection ran into a network error, reject the promise with a
     * NetworkError.
     *
     * @param  {Response} response
     */
  }, {
    key: "onNetworkError",
    value: function onNetworkError(response) {
      var _this2 = this;
      return function () {
        response.parse();
        var error = new _errors.NetworkError(response);
        _this2.log(response, error);
        _this2.emitter.emit('reject', error);
      };
    }

    /**
     * Logs the response, when in debug mode
     *
     * @param  {Response} response the response object to log
     * @private
     */
  }, {
    key: "log",
    value: function log(response, error) {
      if (this.client.debug()) {
        /* istanbul ignore next */
        this.client.logger.log(_util["default"].inspect(response, false, null));
      }
      if (!this.client.debug() && this.client.warn() && error) {
        /* istanbul ignore next */
        this.client.logger.log('Amadeus', error.code, error.description);
      }
    }
  }]);
}();
var _default = exports["default"] = Listener;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVzcG9uc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl91dGlsIiwiX2Vycm9ycyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInQiLCJfdG9QcmltaXRpdmUiLCJyIiwiZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIkxpc3RlbmVyIiwicmVxdWVzdCIsImVtaXR0ZXIiLCJjbGllbnQiLCJ2YWx1ZSIsIm9uUmVzcG9uc2UiLCJodHRwX3Jlc3BvbnNlIiwicmVzcG9uc2UiLCJSZXNwb25zZSIsIm9uIiwiYWRkQ2h1bmsiLCJiaW5kIiwib25FbmQiLCJvbk5ldHdvcmtFcnJvciIsIm9uRXJyb3IiLCJfdGhpcyIsInBhcnNlIiwic3VjY2VzcyIsIm9uU3VjY2VzcyIsIm9uRmFpbCIsImxvZyIsImVtaXQiLCJFcnJvciIsImVycm9yRm9yIiwiZXJyb3IiLCJfcmVmIiwic3RhdHVzQ29kZSIsInBhcnNlZCIsIlNlcnZlckVycm9yIiwiQXV0aGVudGljYXRpb25FcnJvciIsIk5vdEZvdW5kRXJyb3IiLCJDbGllbnRFcnJvciIsIlBhcnNlckVycm9yIiwiVW5rbm93bkVycm9yIiwiX3RoaXMyIiwiTmV0d29ya0Vycm9yIiwiZGVidWciLCJsb2dnZXIiLCJ1dGlsIiwiaW5zcGVjdCIsIndhcm4iLCJjb2RlIiwiZGVzY3JpcHRpb24iLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvY2xpZW50L2xpc3RlbmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXNwb25zZSBmcm9tICcuL3Jlc3BvbnNlJztcbmltcG9ydCB1dGlsICAgICBmcm9tICd1dGlsJztcblxuaW1wb3J0IHtcbiAgU2VydmVyRXJyb3IsXG4gIE5vdEZvdW5kRXJyb3IsXG4gIENsaWVudEVycm9yLFxuICBQYXJzZXJFcnJvcixcbiAgVW5rbm93bkVycm9yLFxuICBOZXR3b3JrRXJyb3IsXG4gIEF1dGhlbnRpY2F0aW9uRXJyb3Jcbn0gZnJvbSAnLi9lcnJvcnMnO1xuXG5cbi8qKlxuICogTGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIEhUVFAgcmVxdWVzdCBhbmQgYnVpbGQgUmVzcG9uc2UvUmVzcG9uc2VFcnJvclxuICogb2JqZWN0cyBhY2NvcmRpbmdseS5cbiAqXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3QgdGhlIHJlcXVlc3Qgb2JqZWN0IHVzZWQgdG8gbWFrZSB0aGUgY2FsbFxuICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgYSBOb2RlIGV2ZW50IGVtaXR0ZXJcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnQgdGhlIGNsaWVudCBpbnN0YW5jZSB0byBsb2cgcmVzdWx0cyB0b1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBMaXN0ZW5lciB7XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3QsIGVtaXR0ZXIsIGNsaWVudCkge1xuICAgIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcbiAgICB0aGlzLmNsaWVudCAgPSBjbGllbnQ7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIHZhcmlvdXMgZXZlbnRzIG9uIHRoZSBodHRwX3Jlc3BvbnNlIG9iamVjdCwgbGlzdGVuaW5nIGZvciBkYXRhLFxuICAgKiBjb25uZWN0aW9ucyBjbG9zaW5nIGZvciBiYWQgcmVhc29ucywgYW5kIHRoZSBlbmQgb2YgdGhlIHJlc3BvbnNlLlxuICAgKlxuICAgKiBVc2VkIGJ5IHRoZSBDbGllbnQgd2hlbiBtYWtpbmcgYW4gQVBJIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gaHR0cF9yZXNwb25zZSBhIE5vZGUgaHR0cCByZXNwb25zZSBvYmplY3RcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgb25SZXNwb25zZShodHRwX3Jlc3BvbnNlKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGh0dHBfcmVzcG9uc2UsIHRoaXMucmVxdWVzdCk7XG5cbiAgICBodHRwX3Jlc3BvbnNlLm9uKCdkYXRhJywgIHJlc3BvbnNlLmFkZENodW5rLmJpbmQocmVzcG9uc2UpKTtcbiAgICBodHRwX3Jlc3BvbnNlLm9uKCdlbmQnLCAgIHRoaXMub25FbmQocmVzcG9uc2UpLmJpbmQodGhpcykpO1xuICAgIGh0dHBfcmVzcG9uc2Uub24oJ2Nsb3NlJywgdGhpcy5vbk5ldHdvcmtFcnJvcihyZXNwb25zZSkuYmluZCh0aGlzKSk7XG4gICAgaHR0cF9yZXNwb25zZS5vbignZXJyb3InLCB0aGlzLm9uTmV0d29ya0Vycm9yKHJlc3BvbnNlKS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMaXN0ZW5zIHRvIGEgbmV0d29yayBlcnJvciB3aGVuIG1ha2luZyBhbiBBUEkgY2FsbC5cbiAgICpcbiAgICogVXNlZCBieSB0aGUgQ2xpZW50IHdoZW4gbWFraW5nIGFuIEFQSSBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGh0dHBfcmVzcG9uc2UgYSBOb2RlIGh0dHAgcmVzcG9uc2Ugb2JqZWN0XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG5cbiAgb25FcnJvcihodHRwX3Jlc3BvbnNlKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGh0dHBfcmVzcG9uc2UsIHRoaXMucmVxdWVzdCk7XG4gICAgdGhpcy5vbk5ldHdvcmtFcnJvcihyZXNwb25zZSkoKTtcbiAgfVxuXG4gIC8vIFBSSVZBVEVcblxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjb25uZWN0aW9uIGVuZHMsIGNoZWNrIGlmIHRoZSByZXNwb25zZSBjYW4gYmUgcGFyc2VkIG9yIG5vdCBhbmRcbiAgICogYWN0IGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAgICovXG4gIG9uRW5kKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJlc3BvbnNlLnBhcnNlKCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcygpKSB7IHRoaXMub25TdWNjZXNzKHJlc3BvbnNlKTsgfVxuICAgICAgZWxzZSB7IHRoaXMub25GYWlsKHJlc3BvbnNlKTsgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIHJlc3BvbnNlIHdhcyBzdWNjZXNzZnVsLCByZXNvbHZlIHRoZSBwcm9taXNlIGFuZCByZXR1cm4gdGhlXG4gICAqIHJlc3BvbnNlIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAgICovXG4gIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIHRoaXMubG9nKHJlc3BvbnNlKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVzb2x2ZScsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjb25uZWN0aW9uIHdhcyBub3Qgc3VjY2Vzc2Z1bCwgZGV0ZXJtaW5lIHRoZSByZWFzb24gYW5kIHJlc29sdmVcbiAgICogdGhlIHByb21pc2UgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwYXJhbSAge1Jlc3BvbnNlfSByZXNwb25zZVxuICAgKi9cbiAgb25GYWlsKHJlc3BvbnNlKSB7XG4gICAgbGV0IEVycm9yID0gdGhpcy5lcnJvckZvcihyZXNwb25zZSk7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlKTtcbiAgICB0aGlzLmxvZyhyZXNwb25zZSwgZXJyb3IpO1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KCdyZWplY3QnLCBlcnJvcik7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSByaWdodCBlcnJvciBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXBvbnNlXG4gICAqIEByZXR1cm5zIHtSZXNwb25zZUVycm9yfVxuICAgKi9cbiAgZXJyb3JGb3Ioe3N0YXR1c0NvZGUsIHBhcnNlZH0pIHtcbiAgICBsZXQgZXJyb3IgPSBudWxsO1xuICAgIGlmIChzdGF0dXNDb2RlID49IDUwMCkgeyBlcnJvciA9IFNlcnZlckVycm9yOyB9XG4gICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA9PT0gNDAxKSB7IGVycm9yID0gQXV0aGVudGljYXRpb25FcnJvcjsgfVxuICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwNCkgeyBlcnJvciA9IE5vdEZvdW5kRXJyb3I7IH1cbiAgICBlbHNlIGlmIChzdGF0dXNDb2RlID49IDQwMCkgeyBlcnJvciA9IENsaWVudEVycm9yOyB9XG4gICAgZWxzZSBpZiAoIXBhcnNlZCkgeyBlcnJvciA9IFBhcnNlckVycm9yOyB9XG4gICAgZWxzZSB7IGVycm9yID0gVW5rbm93bkVycm9yOyB9XG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGNvbm5lY3Rpb24gcmFuIGludG8gYSBuZXR3b3JrIGVycm9yLCByZWplY3QgdGhlIHByb21pc2Ugd2l0aCBhXG4gICAqIE5ldHdvcmtFcnJvci5cbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gICAqL1xuICBvbk5ldHdvcmtFcnJvcihyZXNwb25zZSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXNwb25zZS5wYXJzZSgpO1xuICAgICAgbGV0IGVycm9yID0gbmV3IE5ldHdvcmtFcnJvcihyZXNwb25zZSk7XG4gICAgICB0aGlzLmxvZyhyZXNwb25zZSwgZXJyb3IpO1xuICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3JlamVjdCcsIGVycm9yKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgdGhlIHJlc3BvbnNlLCB3aGVuIGluIGRlYnVnIG1vZGVcbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgdG8gbG9nXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBsb2cocmVzcG9uc2UsIGVycm9yKSB7XG4gICAgaWYgKHRoaXMuY2xpZW50LmRlYnVnKCkpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICB0aGlzLmNsaWVudC5sb2dnZXIubG9nKHV0aWwuaW5zcGVjdChyZXNwb25zZSwgZmFsc2UsIG51bGwpKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmNsaWVudC5kZWJ1ZygpICYmIHRoaXMuY2xpZW50Lndhcm4oKSAmJiBlcnJvcikge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgIHRoaXMuY2xpZW50LmxvZ2dlci5sb2coJ0FtYWRldXMnLCBlcnJvci5jb2RlLCBlcnJvci5kZXNjcmlwdGlvbik7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RlbmVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBRSxPQUFBLEdBQUFGLE9BQUE7QUFRa0IsU0FBQUQsdUJBQUFJLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssZ0JBQUFDLFFBQUEsRUFBQUMsV0FBQSxVQUFBRCxRQUFBLFlBQUFDLFdBQUEsZUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQWYsV0FBQSxFQUFBZ0IsVUFBQSxFQUFBQyxXQUFBLFFBQUFELFVBQUEsRUFBQWQsaUJBQUEsQ0FBQUYsV0FBQSxDQUFBSCxTQUFBLEVBQUFtQixVQUFBLE9BQUFDLFdBQUEsRUFBQWYsaUJBQUEsQ0FBQUYsV0FBQSxFQUFBaUIsV0FBQSxHQUFBTixNQUFBLENBQUFDLGNBQUEsQ0FBQVosV0FBQSxpQkFBQVUsUUFBQSxtQkFBQVYsV0FBQTtBQUFBLFNBQUFhLGVBQUFLLENBQUEsUUFBQWIsQ0FBQSxHQUFBYyxZQUFBLENBQUFELENBQUEsZ0NBQUExQixPQUFBLENBQUFhLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQWMsYUFBQUQsQ0FBQSxFQUFBRSxDQUFBLG9CQUFBNUIsT0FBQSxDQUFBMEIsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUF4QixNQUFBLENBQUE0QixXQUFBLGtCQUFBRCxDQUFBLFFBQUFoQixDQUFBLEdBQUFnQixDQUFBLENBQUFFLElBQUEsQ0FBQUwsQ0FBQSxFQUFBRSxDQUFBLGdDQUFBNUIsT0FBQSxDQUFBYSxDQUFBLFVBQUFBLENBQUEsWUFBQUosU0FBQSx5RUFBQW1CLENBQUEsR0FBQUksTUFBQSxHQUFBQyxNQUFBLEVBQUFQLENBQUE7QUFHbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFTTVEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxNQUFNLEVBQUU7SUFBQS9CLGVBQUEsT0FBQTRCLFFBQUE7SUFDcEMsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUlBLE1BQU07RUFDdkI7O0VBRUE7O0VBR0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUkUsT0FBQWQsWUFBQSxDQUFBVyxRQUFBO0lBQUFaLEdBQUE7SUFBQWdCLEtBQUEsRUFTQSxTQUFBQyxXQUFXQyxhQUFhLEVBQUU7TUFDeEIsSUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFRLENBQUNGLGFBQWEsRUFBRSxJQUFJLENBQUNMLE9BQU8sQ0FBQztNQUV4REssYUFBYSxDQUFDRyxFQUFFLENBQUMsTUFBTSxFQUFHRixRQUFRLENBQUNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUMsQ0FBQztNQUMzREQsYUFBYSxDQUFDRyxFQUFFLENBQUMsS0FBSyxFQUFJLElBQUksQ0FBQ0csS0FBSyxDQUFDTCxRQUFRLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQzFETCxhQUFhLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDSSxjQUFjLENBQUNOLFFBQVEsQ0FBQyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDbkVMLGFBQWEsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNJLGNBQWMsQ0FBQ04sUUFBUSxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRTs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQXZCLEdBQUE7SUFBQWdCLEtBQUEsRUFTQSxTQUFBVSxRQUFRUixhQUFhLEVBQUU7TUFDckIsSUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFRLENBQUNGLGFBQWEsRUFBRSxJQUFJLENBQUNMLE9BQU8sQ0FBQztNQUN4RCxJQUFJLENBQUNZLGNBQWMsQ0FBQ04sUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqQzs7SUFFQTs7SUFHQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBbkIsR0FBQTtJQUFBZ0IsS0FBQSxFQU1BLFNBQUFRLE1BQU1MLFFBQVEsRUFBRTtNQUFBLElBQUFRLEtBQUE7TUFDZCxPQUFPLFlBQU07UUFDWFIsUUFBUSxDQUFDUyxLQUFLLENBQUMsQ0FBQztRQUNoQixJQUFJVCxRQUFRLENBQUNVLE9BQU8sQ0FBQyxDQUFDLEVBQUU7VUFBRUYsS0FBSSxDQUFDRyxTQUFTLENBQUNYLFFBQVEsQ0FBQztRQUFFLENBQUMsTUFDaEQ7VUFBRVEsS0FBSSxDQUFDSSxNQUFNLENBQUNaLFFBQVEsQ0FBQztRQUFHO01BQ2pDLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBbkIsR0FBQTtJQUFBZ0IsS0FBQSxFQU1BLFNBQUFjLFVBQVVYLFFBQVEsRUFBRTtNQUNsQixJQUFJLENBQUNhLEdBQUcsQ0FBQ2IsUUFBUSxDQUFDO01BQ2xCLElBQUksQ0FBQ0wsT0FBTyxDQUFDbUIsSUFBSSxDQUFDLFNBQVMsRUFBRWQsUUFBUSxDQUFDO0lBQ3hDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFuQixHQUFBO0lBQUFnQixLQUFBLEVBTUEsU0FBQWUsT0FBT1osUUFBUSxFQUFFO01BQ2YsSUFBSWUsS0FBSyxHQUFHLElBQUksQ0FBQ0MsUUFBUSxDQUFDaEIsUUFBUSxDQUFDO01BQ25DLElBQUlpQixLQUFLLEdBQUcsSUFBSUYsS0FBSyxDQUFDZixRQUFRLENBQUM7TUFDL0IsSUFBSSxDQUFDYSxHQUFHLENBQUNiLFFBQVEsRUFBRWlCLEtBQUssQ0FBQztNQUN6QixJQUFJLENBQUN0QixPQUFPLENBQUNtQixJQUFJLENBQUMsUUFBUSxFQUFFRyxLQUFLLENBQUM7SUFDcEM7O0lBR0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEU7SUFBQXBDLEdBQUE7SUFBQWdCLEtBQUEsRUFNQSxTQUFBbUIsU0FBQUUsSUFBQSxFQUErQjtNQUFBLElBQXJCQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtRQUFFQyxNQUFNLEdBQUFGLElBQUEsQ0FBTkUsTUFBTTtNQUMxQixJQUFJSCxLQUFLLEdBQUcsSUFBSTtNQUNoQixJQUFJRSxVQUFVLElBQUksR0FBRyxFQUFFO1FBQUVGLEtBQUssR0FBR0ksbUJBQVc7TUFBRSxDQUFDLE1BQzFDLElBQUlGLFVBQVUsS0FBSyxHQUFHLEVBQUU7UUFBRUYsS0FBSyxHQUFHSywyQkFBbUI7TUFBRSxDQUFDLE1BQ3hELElBQUlILFVBQVUsS0FBSyxHQUFHLEVBQUU7UUFBRUYsS0FBSyxHQUFHTSxxQkFBYTtNQUFFLENBQUMsTUFDbEQsSUFBSUosVUFBVSxJQUFJLEdBQUcsRUFBRTtRQUFFRixLQUFLLEdBQUdPLG1CQUFXO01BQUUsQ0FBQyxNQUMvQyxJQUFJLENBQUNKLE1BQU0sRUFBRTtRQUFFSCxLQUFLLEdBQUdRLG1CQUFXO01BQUUsQ0FBQyxNQUNyQztRQUFFUixLQUFLLEdBQUdTLG9CQUFZO01BQUU7TUFDN0IsT0FBT1QsS0FBSztJQUNkOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFwQyxHQUFBO0lBQUFnQixLQUFBLEVBTUEsU0FBQVMsZUFBZU4sUUFBUSxFQUFFO01BQUEsSUFBQTJCLE1BQUE7TUFDdkIsT0FBTyxZQUFNO1FBQ1gzQixRQUFRLENBQUNTLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLElBQUlRLEtBQUssR0FBRyxJQUFJVyxvQkFBWSxDQUFDNUIsUUFBUSxDQUFDO1FBQ3RDMkIsTUFBSSxDQUFDZCxHQUFHLENBQUNiLFFBQVEsRUFBRWlCLEtBQUssQ0FBQztRQUN6QlUsTUFBSSxDQUFDaEMsT0FBTyxDQUFDbUIsSUFBSSxDQUFDLFFBQVEsRUFBRUcsS0FBSyxDQUFDO01BQ3BDLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBcEMsR0FBQTtJQUFBZ0IsS0FBQSxFQU1BLFNBQUFnQixJQUFJYixRQUFRLEVBQUVpQixLQUFLLEVBQUU7TUFDbkIsSUFBSSxJQUFJLENBQUNyQixNQUFNLENBQUNpQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCO1FBQ0EsSUFBSSxDQUFDakMsTUFBTSxDQUFDa0MsTUFBTSxDQUFDakIsR0FBRyxDQUFDa0IsZ0JBQUksQ0FBQ0MsT0FBTyxDQUFDaEMsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztNQUM3RDtNQUNBLElBQUksQ0FBQyxJQUFJLENBQUNKLE1BQU0sQ0FBQ2lDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDakMsTUFBTSxDQUFDcUMsSUFBSSxDQUFDLENBQUMsSUFBSWhCLEtBQUssRUFBRTtRQUN2RDtRQUNBLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ2tDLE1BQU0sQ0FBQ2pCLEdBQUcsQ0FBQyxTQUFTLEVBQUVJLEtBQUssQ0FBQ2lCLElBQUksRUFBRWpCLEtBQUssQ0FBQ2tCLFdBQVcsQ0FBQztNQUNsRTtJQUNGO0VBQUM7QUFBQTtBQUFBLElBQUFDLFFBQUEsR0FBQUMsT0FBQSxjQUdZNUMsUUFBUTtBQUFBNkMsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==