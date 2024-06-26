"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _safety_rated_locations = _interopRequireDefault(require("./safety/safety_rated_locations"));
var _safety_rated_location = _interopRequireDefault(require("./safety/safety_rated_location"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/safety` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.safety;
 * ```
 *
 * @param {Client} client
 * @property {SafetyRatedLocations} safetyRatedLocations
 */
var Safety = /*#__PURE__*/function () {
  function Safety(client) {
    _classCallCheck(this, Safety);
    this.client = client;
    this.safetyRatedLocations = new _safety_rated_locations["default"](client);
  }
  return _createClass(Safety, [{
    key: "safetyRatedLocation",
    value: function safetyRatedLocation(locationId) {
      return new _safety_rated_location["default"](this.client, locationId);
    }
  }]);
}();
var _default = exports["default"] = Safety;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfc2FmZXR5X3JhdGVkX2xvY2F0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3NhZmV0eV9yYXRlZF9sb2NhdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInQiLCJfdG9QcmltaXRpdmUiLCJyIiwiZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIlNhZmV0eSIsImNsaWVudCIsInNhZmV0eVJhdGVkTG9jYXRpb25zIiwiU2FmZXR5UmF0ZWRMb2NhdGlvbnMiLCJ2YWx1ZSIsInNhZmV0eVJhdGVkTG9jYXRpb24iLCJsb2NhdGlvbklkIiwiU2FmZXR5UmF0ZWRMb2NhdGlvbiIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3NhZmV0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2FmZXR5UmF0ZWRMb2NhdGlvbnMgZnJvbSAnLi9zYWZldHkvc2FmZXR5X3JhdGVkX2xvY2F0aW9ucyc7XG5pbXBvcnQgU2FmZXR5UmF0ZWRMb2NhdGlvbiBmcm9tICcuL3NhZmV0eS9zYWZldHlfcmF0ZWRfbG9jYXRpb24nO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zYWZldHlgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zYWZldHk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge1NhZmV0eVJhdGVkTG9jYXRpb25zfSBzYWZldHlSYXRlZExvY2F0aW9uc1xuICovXG5jbGFzcyBTYWZldHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLnNhZmV0eVJhdGVkTG9jYXRpb25zID0gbmV3IFNhZmV0eVJhdGVkTG9jYXRpb25zKGNsaWVudCk7XG4gIH1cblxuICBzYWZldHlSYXRlZExvY2F0aW9uKGxvY2F0aW9uSWQpIHtcbiAgICByZXR1cm4gbmV3IFNhZmV0eVJhdGVkTG9jYXRpb24odGhpcy5jbGllbnQsIGxvY2F0aW9uSWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhZmV0eTsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLHVCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxzQkFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQWlFLFNBQUFELHVCQUFBRyxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxRQUFBLEVBQUFDLFdBQUEsVUFBQUQsUUFBQSxZQUFBQyxXQUFBLGVBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQUMsTUFBQSxFQUFBQyxLQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxLQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxVQUFBLEdBQUFILEtBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxVQUFBLENBQUFDLFVBQUEsR0FBQUQsVUFBQSxDQUFBQyxVQUFBLFdBQUFELFVBQUEsQ0FBQUUsWUFBQSx3QkFBQUYsVUFBQSxFQUFBQSxVQUFBLENBQUFHLFFBQUEsU0FBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFULE1BQUEsRUFBQVUsY0FBQSxDQUFBTixVQUFBLENBQUFPLEdBQUEsR0FBQVAsVUFBQTtBQUFBLFNBQUFRLGFBQUFmLFdBQUEsRUFBQWdCLFVBQUEsRUFBQUMsV0FBQSxRQUFBRCxVQUFBLEVBQUFkLGlCQUFBLENBQUFGLFdBQUEsQ0FBQUgsU0FBQSxFQUFBbUIsVUFBQSxPQUFBQyxXQUFBLEVBQUFmLGlCQUFBLENBQUFGLFdBQUEsRUFBQWlCLFdBQUEsR0FBQU4sTUFBQSxDQUFBQyxjQUFBLENBQUFaLFdBQUEsaUJBQUFVLFFBQUEsbUJBQUFWLFdBQUE7QUFBQSxTQUFBYSxlQUFBSyxDQUFBLFFBQUFiLENBQUEsR0FBQWMsWUFBQSxDQUFBRCxDQUFBLGdDQUFBMUIsT0FBQSxDQUFBYSxDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFjLGFBQUFELENBQUEsRUFBQUUsQ0FBQSxvQkFBQTVCLE9BQUEsQ0FBQTBCLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBeEIsTUFBQSxDQUFBNEIsV0FBQSxrQkFBQUQsQ0FBQSxRQUFBaEIsQ0FBQSxHQUFBZ0IsQ0FBQSxDQUFBRSxJQUFBLENBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQ0FBQTVCLE9BQUEsQ0FBQWEsQ0FBQSxVQUFBQSxDQUFBLFlBQUFKLFNBQUEseUVBQUFtQixDQUFBLEdBQUFJLE1BQUEsR0FBQUMsTUFBQSxFQUFBUCxDQUFBO0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSxJQWNNUSxNQUFNO0VBQ1YsU0FBQUEsT0FBWUMsTUFBTSxFQUFFO0lBQUE3QixlQUFBLE9BQUE0QixNQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUcsSUFBSUMsa0NBQW9CLENBQUNGLE1BQU0sQ0FBQztFQUM5RDtFQUFDLE9BQUFaLFlBQUEsQ0FBQVcsTUFBQTtJQUFBWixHQUFBO0lBQUFnQixLQUFBLEVBRUQsU0FBQUMsb0JBQW9CQyxVQUFVLEVBQUU7TUFDOUIsT0FBTyxJQUFJQyxpQ0FBbUIsQ0FBQyxJQUFJLENBQUNOLE1BQU0sRUFBRUssVUFBVSxDQUFDO0lBQ3pEO0VBQUM7QUFBQTtBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZVCxNQUFNO0FBQUFVLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=