"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _flight_orders = _interopRequireDefault(require("./booking/flight_orders"));
var _flight_order = _interopRequireDefault(require("./booking/flight_order"));
var _hotel_bookings = _interopRequireDefault(require("./booking/hotel_bookings"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * A namespaced client for the
 * `/v1/booking` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking;
 * ```
 *
 * @param {Client} client
 * @property {FlightOrders} flightOrders
 * @property {FlightOrder} flightOrder
 * @property {HotelBookings} hotelBookings
 * @protected
 */
var Booking = /*#__PURE__*/function () {
  function Booking(client) {
    _classCallCheck(this, Booking);
    this.client = client;
    this.flightOrders = new _flight_orders["default"](client);
    this.hotelBookings = new _hotel_bookings["default"](client);
  }
  return _createClass(Booking, [{
    key: "flightOrder",
    value: function flightOrder(orderId) {
      return new _flight_order["default"](this.client, orderId);
    }
  }]);
}();
var _default = exports["default"] = Booking;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X29yZGVycyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZsaWdodF9vcmRlciIsIl9ob3RlbF9ib29raW5ncyIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsInQiLCJfdG9QcmltaXRpdmUiLCJyIiwiZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIkJvb2tpbmciLCJjbGllbnQiLCJmbGlnaHRPcmRlcnMiLCJGbGlnaHRPcmRlcnMiLCJob3RlbEJvb2tpbmdzIiwiSG90ZWxCb29raW5ncyIsInZhbHVlIiwiZmxpZ2h0T3JkZXIiLCJvcmRlcklkIiwiRmxpZ2h0T3JkZXIiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRPcmRlcnMgZnJvbSAnLi9ib29raW5nL2ZsaWdodF9vcmRlcnMnO1xuaW1wb3J0IEZsaWdodE9yZGVyIGZyb20gJy4vYm9va2luZy9mbGlnaHRfb3JkZXInO1xuaW1wb3J0IEhvdGVsQm9va2luZ3MgZnJvbSAnLi9ib29raW5nL2hvdGVsX2Jvb2tpbmdzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmJvb2tpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyc30gZmxpZ2h0T3JkZXJzXG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyfSBmbGlnaHRPcmRlclxuICogQHByb3BlcnR5IHtIb3RlbEJvb2tpbmdzfSBob3RlbEJvb2tpbmdzXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIEJvb2tpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICA9IGNsaWVudDtcbiAgICB0aGlzLmZsaWdodE9yZGVycyA9IG5ldyBGbGlnaHRPcmRlcnMoY2xpZW50KTtcbiAgICB0aGlzLmhvdGVsQm9va2luZ3MgPSBuZXcgSG90ZWxCb29raW5ncyhjbGllbnQpO1xuICB9XG5cbiAgZmxpZ2h0T3JkZXIgKG9yZGVySWQpIHtcbiAgICByZXR1cm4gbmV3IEZsaWdodE9yZGVyKHRoaXMuY2xpZW50LCBvcmRlcklkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29raW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsY0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsZUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQXFELFNBQUFELHVCQUFBSSxHQUFBLFdBQUFBLEdBQUEsSUFBQUEsR0FBQSxDQUFBQyxVQUFBLEdBQUFELEdBQUEsZ0JBQUFBLEdBQUE7QUFBQSxTQUFBRSxRQUFBQyxD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