"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _analytics = _interopRequireDefault(require("./location/analytics"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/location` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} analytics
 */
var Location = /*#__PURE__*/_createClass(function Location(client) {
  _classCallCheck(this, Location);
  this.client = client;
  this.analytics = new _analytics["default"](client);
});
var _default = exports["default"] = Location;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYW5hbHl0aWNzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwidCIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJyIiwiZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiTG9jYXRpb24iLCJjbGllbnQiLCJhbmFseXRpY3MiLCJBbmFseXRpY3MiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9sb2NhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5hbHl0aWNzICAgIGZyb20gJy4vbG9jYXRpb24vYW5hbHl0aWNzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvbG9jYXRpb25gIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5sb2NhdGlvbjtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW5hbHl0aWNzfSBhbmFseXRpY3NcbiAqL1xuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICAgICAgICAgICA9IGNsaWVudDtcbiAgICB0aGlzLmFuYWx5dGljcyA9IG5ldyBBbmFseXRpY3MoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBZ0QsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZixpQkFBQSxDQUFBYyxXQUFBLENBQUFHLFNBQUEsRUFBQUYsVUFBQSxPQUFBQyxXQUFBLEVBQUFoQixpQkFBQSxDQUFBYyxXQUFBLEVBQUFFLFdBQUEsR0FBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFJLFdBQUEsaUJBQUFOLFFBQUEsbUJBQUFNLFdBQUE7QUFBQSxTQUFBSCxlQUFBTyxDQUFBLFFBQUFmLENBQUEsR0FBQWdCLFlBQUEsQ0FBQUQsQ0FBQSxnQ0FBQUUsT0FBQSxDQUFBakIsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBZ0IsYUFBQUQsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBRCxPQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFJLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxNQUFBLENBQUFDLFdBQUEsa0JBQUFGLENBQUEsUUFBQW5CLENBQUEsR0FBQW1CLENBQUEsQ0FBQUcsSUFBQSxDQUFBUCxDQUFBLEVBQUFHLENBQUEsZ0NBQUFELE9BQUEsQ0FBQWpCLENBQUEsVUFBQUEsQ0FBQSxZQUFBdUIsU0FBQSx5RUFBQUwsQ0FBQSxHQUFBTSxNQUFBLEdBQUFDLE1BQUEsRUFBQVYsQ0FBQTtBQUFBLFNBQUFXLGdCQUFBQyxRQUFBLEVBQUFoQixXQUFBLFVBQUFnQixRQUFBLFlBQUFoQixXQUFBLGVBQUFZLFNBQUE7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLElBY01LLFFBQVEsZ0JBQUFsQixZQUFBLENBQ1osU0FBQWtCLFNBQVlDLE1BQU0sRUFBRTtFQUFBSCxlQUFBLE9BQUFFLFFBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3hDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsUUFBUTtBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119