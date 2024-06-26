"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _transfers = _interopRequireDefault(require("./transfer_orders/transfers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX');
 * ```
 *
 * @param {Client} client
 * @param {string} orderId
 */
var TransferOrder = /*#__PURE__*/_createClass(function TransferOrder(client, orderId) {
  _classCallCheck(this, TransferOrder);
  this.client = client;
  this.orderId = orderId;
  this.transfers = new _transfers["default"](client, orderId);
});
var _default = exports["default"] = TransferOrder;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhbnNmZXJzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsIkNvbnN0cnVjdG9yIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwicHJvdG90eXBlIiwidCIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJyIiwiZSIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiVHJhbnNmZXJPcmRlciIsImNsaWVudCIsIm9yZGVySWQiLCJ0cmFuc2ZlcnMiLCJUcmFuc2ZlcnMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZy90cmFuc2Zlcl9vcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNmZXJzIGZyb20gJy4vdHJhbnNmZXJfb3JkZXJzL3RyYW5zZmVycyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVycy9YWFhYWGAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXIoJ1hYWCcpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHBhcmFtIHtzdHJpbmd9IG9yZGVySWRcbiAqL1xuY2xhc3MgVHJhbnNmZXJPcmRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgb3JkZXJJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XG4gICAgdGhpcy50cmFuc2ZlcnMgPSBuZXcgVHJhbnNmZXJzKGNsaWVudCwgb3JkZXJJZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmZXJPcmRlcjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBb0QsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQUFBLFNBQUFFLGtCQUFBQyxNQUFBLEVBQUFDLEtBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELEtBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLFVBQUEsR0FBQUgsS0FBQSxDQUFBQyxDQUFBLEdBQUFFLFVBQUEsQ0FBQUMsVUFBQSxHQUFBRCxVQUFBLENBQUFDLFVBQUEsV0FBQUQsVUFBQSxDQUFBRSxZQUFBLHdCQUFBRixVQUFBLEVBQUFBLFVBQUEsQ0FBQUcsUUFBQSxTQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVQsTUFBQSxFQUFBVSxjQUFBLENBQUFOLFVBQUEsQ0FBQU8sR0FBQSxHQUFBUCxVQUFBO0FBQUEsU0FBQVEsYUFBQUMsV0FBQSxFQUFBQyxVQUFBLEVBQUFDLFdBQUEsUUFBQUQsVUFBQSxFQUFBZixpQkFBQSxDQUFBYyxXQUFBLENBQUFHLFNBQUEsRUFBQUYsVUFBQSxPQUFBQyxXQUFBLEVBQUFoQixpQkFBQSxDQUFBYyxXQUFBLEVBQUFFLFdBQUEsR0FBQVAsTUFBQSxDQUFBQyxjQUFBLENBQUFJLFdBQUEsaUJBQUFOLFFBQUEsbUJBQUFNLFdBQUE7QUFBQSxTQUFBSCxlQUFBTyxDQUFBLFFBQUFmLENBQUEsR0FBQWdCLFlBQUEsQ0FBQUQsQ0FBQSxnQ0FBQUUsT0FBQSxDQUFBakIsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBZ0IsYUFBQUQsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBRCxPQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFJLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxNQUFBLENBQUFDLFdBQUEsa0JBQUFGLENBQUEsUUFBQW5CLENBQUEsR0FBQW1CLENBQUEsQ0FBQUcsSUFBQSxDQUFBUCxDQUFBLEVBQUFHLENBQUEsZ0NBQUFELE9BQUEsQ0FBQWpCLENBQUEsVUFBQUEsQ0FBQSxZQUFBdUIsU0FBQSx5RUFBQUwsQ0FBQSxHQUFBTSxNQUFBLEdBQUFDLE1BQUEsRUFBQVYsQ0FBQTtBQUFBLFNBQUFXLGdCQUFBQyxRQUFBLEVBQUFoQixXQUFBLFVBQUFnQixRQUFBLFlBQUFoQixXQUFBLGVBQUFZLFNBQUE7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLElBY01LLGFBQWEsZ0JBQUFsQixZQUFBLENBQ2pCLFNBQUFrQixjQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtFQUFBSixlQUFBLE9BQUFFLGFBQUE7RUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0gsTUFBTSxFQUFFQyxPQUFPLENBQUM7QUFDakQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTixhQUFhO0FBQUFPLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=