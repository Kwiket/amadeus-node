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
 * `/v1/ordering/transfer-orders/XXX/transfers/cancellation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post(JSON.stringify({}), '12345');;
 * ```
 *
 * @param {Client} client
 */
var Cancellation = /*#__PURE__*/function () {
  function Cancellation(client, orderId) {
    _classCallCheck(this, Cancellation);
    this.client = client;
    this.orderId = orderId;
  }

  /**
   * To cancel a transfer order based on its id
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To cancel a transfer order with ID 'XXX' and confirmation number '12345'
   *
   * ```js
   * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post(JSON.stringify({}), '12345');;
   * ```
   */
  return _createClass(Cancellation, [{
    key: "post",
    value: function post(body, confirmNbr) {
      return this.client.post("/v1/ordering/transfer-orders/".concat(this.orderId, "/transfers/cancellation?confirmNbr=").concat(confirmNbr), body);
    }
  }]);
}();
var _default = exports["default"] = Cancellation;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYW5jZWxsYXRpb24iLCJjbGllbnQiLCJvcmRlcklkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwiYm9keSIsImNvbmZpcm1OYnIiLCJjb25jYXQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZy90cmFuc2Zlcl9vcmRlcnMvdHJhbnNmZXJzL2NhbmNlbGxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9vcmRlcmluZy90cmFuc2Zlci1vcmRlcnMvWFhYL3RyYW5zZmVycy9jYW5jZWxsYXRpb25gIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVyKCdYWFgnKS50cmFuc2ZlcnMuY2FuY2VsbGF0aW9uLnBvc3QoSlNPTi5zdHJpbmdpZnkoe30pLCAnMTIzNDUnKTs7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIENhbmNlbGxhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgb3JkZXJJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gIH1cblxuICAvKipcbiAgICogVG8gY2FuY2VsIGEgdHJhbnNmZXIgb3JkZXIgYmFzZWQgb24gaXRzIGlkXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gY2FuY2VsIGEgdHJhbnNmZXIgb3JkZXIgd2l0aCBJRCAnWFhYJyBhbmQgY29uZmlybWF0aW9uIG51bWJlciAnMTIzNDUnXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMub3JkZXJpbmcudHJhbnNmZXJPcmRlcignWFhYJykudHJhbnNmZXJzLmNhbmNlbGxhdGlvbi5wb3N0KEpTT04uc3RyaW5naWZ5KHt9KSwgJzEyMzQ1Jyk7O1xuICAgKiBgYGBcbiAgICovXG4gIHBvc3QoYm9keSwgY29uZmlybU5icikge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KFxuICAgICAgYC92MS9vcmRlcmluZy90cmFuc2Zlci1vcmRlcnMvJHt0aGlzLm9yZGVySWR9L3RyYW5zZmVycy9jYW5jZWxsYXRpb24/Y29uZmlybU5icj0ke2NvbmZpcm1OYnJ9YCwgYm9keSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FuY2VsbGF0aW9uOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLE1BQU0sRUFBRUMsT0FBTyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsWUFBQTtJQUMzQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTztFQUN4Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVRFLE9BQUFFLFlBQUEsQ0FBQUosWUFBQTtJQUFBSyxHQUFBO0lBQUFDLEtBQUEsRUFVQSxTQUFBQyxLQUFLQyxJQUFJLEVBQUVDLFVBQVUsRUFBRTtNQUNyQixPQUFPLElBQUksQ0FBQ1IsTUFBTSxDQUFDTSxJQUFJLGlDQUFBRyxNQUFBLENBQ1csSUFBSSxDQUFDUixPQUFPLHlDQUFBUSxNQUFBLENBQXNDRCxVQUFVLEdBQUlELElBQUksQ0FBQztJQUN6RztFQUFDO0FBQUE7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWVosWUFBWTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119